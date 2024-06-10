import {f_sqlexute, prefix} from '../config/index'


//@result => tec_tst.tst_
const base_name = `${prefix.shema}.${prefix.prefix}`;

export const createTableQuery = `
    CREATE TABLE IF NOT EXISTS ${base_name}VENTAS_SO (
      id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
      Fecha varchar(255),
      years varchar(255),
      Mes VARCHAR(20),
      Semana VARCHAR(20),
      Pais VARCHAR(50),
      Series VARCHAR(50),
      Code VARCHAR(50),
      Model VARCHAR(100),
      Capacity VARCHAR(50),
      SellOutActivation varchar(255)
    );
    commit;
  `;


export const insertDataToTable = async (jsonData: any[]) => {


  let result =[];

  const insertDataQuery = `
    INSERT INTO ${base_name}VENTAS_SO  (
      Fecha, years, Mes, Semana, Pais, Series,Code,
      Model, Capacity, SellOutActivation
    ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10);
  `;


  for (const row of jsonData) {
    const values = [
      row['Fecha'],
      row['Año'],
      row['Mes'],
      row['Semana'],
      row['Pais'],
      row['Series'],
      row['Code'],
      row['Model'],
      row['Capacity'],
      row['SellOutActivation']
    ];
    console.log(values);
    const res =  await f_sqlexute(insertDataQuery,values);
    result.push(res);
  }


  return result;
};

