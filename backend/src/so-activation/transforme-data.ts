
import xlsx from "xlsx";
import {f_getFormattedKeys} from "../doc";
import {f_insertDataDynamicallyToTable} from "../config";

export const function_get_so_activacion_sql = async ({file,hoja,weekNumber}:{file:string,hoja:string,weekNumber:string})=>{


    const filePath = `./src/file/${file}.xlsx`;
    const workbook = xlsx.readFile(filePath);
    const sheetName = `${hoja}`;
    const worksheet = workbook.Sheets[sheetName];
    const jsonData  = xlsx.utils.sheet_to_json(worksheet) as OriginalData[];


    const transformedData = transformData({originalData:jsonData,weekNumber:weekNumber});
    const groupedAndSummedData = groupAndSumData(transformedData);


    const [err, keys] = f_getFormattedKeys(groupedAndSummedData);
    if (err) throw err;

    const [e,resul] =   await f_insertDataDynamicallyToTable('tst_daily_activation_model_new',keys!,groupedAndSummedData,false);
    if(e) throw e;


}

function transformData({originalData,weekNumber}:{originalData: OriginalData[],weekNumber:string}): TransformedData[] {

    const allowedCountries = ['Bolivia', 'Peru'];
    const transformedData: TransformedData[] = [];

    originalData.forEach(data => {
        const country = data["插卡激活国家-英文+SIM Act. Cnty.-en"];
        if (allowedCountries.includes(country)) {

            const [code, capacity] = data["机型+item"].split(' ');

            const model = data['市场名+Market Name'];
            const serie = data['系列+Series'];
            console.log(model,serie, 'MARCA')
            const simActDateInfo = extractDateInfo(data["插卡激活日期+SIM Act. Date"]);

            const newData: TransformedData = {
                year: simActDateInfo.year ?? '(en blanco)',
                month: simActDateInfo.month ?? '(en blanco)',
                day: simActDateInfo.day ?? '(en blanco)',
                mes: simActDateInfo.monthName ?? '(en blanco)',
                mesn: simActDateInfo.monthNum ?? '(en blanco)',
                semana: `Week ${weekNumber}` ?? '(en blanco)',
                pais: country ?? '(en blanco)',
                series: serie ?? '(en blanco)',
                code:code ?? '(en blanco)',
                model: model ?? '(en blanco)',
                capacity: capacity ?? '(en blanco)',
                selloutactivation: 1
            };

            transformedData.push(newData);
        }
    });

    return transformedData;
}
function groupAndSumData(transformedData: TransformedData[]) {
    const groupedData: { [key: string]: any } = {};
    transformedData.forEach(data => {
        let {year,mesn,day,pais,series,code,model,capacity} = data;

        const key = `${year} | ${mesn} |${day} | ${pais}|${series}| ${code}| ${model}| ${capacity}`;
        console.log(key);
        if (!groupedData[key]) {
            groupedData[key] = { ...data, selloutactivation: 0 };
        }

        groupedData[key].selloutactivation += data.selloutactivation;
    });
    return  Object.values(groupedData);

}
type OriginalData = {
    "IMEI编号+IMEI": string;
    "系列+Series": string;
    "市场名+Market Name": string;
    "机型+item": string;
    "颜色+Color": string;
    "插卡激活日期+SIM Act. Date": string;
    "插卡激活国家-英文+SIM Act. Cnty.-en": string;
    "出货日期+Delivery Date": number;
    "发货国家-英文+Deliv. Cnty.-en": string;
    "客户SAP编码+Cust. SAP Id": string;
    "客户名称+Cust. Sap Name": string;
    "移动互联激活城市+Internet Act. City": string;
};
type TransformedData = {
    year: string;
    month: string;
    day: string;
    mes: string;
    mesn: string;
    semana: string;
    pais: string;
    series: string;
    code:string
    model: string;
    capacity: string;
    selloutactivation: number;
};
function extractDateInfo(dateString: string) {
    const [year, month,day] = dateString.split('-');

    const monthNames = [
        'Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio',
        'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'
    ];
    const monthName = monthNames[parseInt(month) - 1];
    return { year, month, day, monthName, monthNum: month };
}




