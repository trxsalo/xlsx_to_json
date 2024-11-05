import fs from 'node:fs/promises';
import * as path from "node:path";


export const f_read_json = async (namefile:string)=>{
    const data =  await fs.readFile(`./src/file/${namefile}.json`, 'utf-8');
    return JSON.parse(data);
}


export const f_write_json = async (namefile: string, data: any[]) => {
    try {
        const nameFile = namefile.replace(/\./g, "").replace('json','');
        const name = nameFile.split('/').pop();
        const dir = path.dirname('./src/file/' + nameFile);
        const filepath = path.join(dir, name + '.json');

        // Crear el directorio, incluidas todas las subcarpetas necesarias
        await fs.mkdir(dir, { recursive: true });

        const jsonData = JSON.stringify(data, null, 2); // Formatea los datos con 2 espacios de indentacion
        await fs.writeFile(filepath, jsonData, 'utf-8');
        //console.log(`Datos guardados correctamente en ./src/file/save/${namefile}.json`);

        // Leer el archivo para confirmar que se ha guardado correctamente
        const savedData = await fs.readFile(filepath, 'utf-8');
        console.log('Contenido guardado:',);
        return true;
    } catch (error) {
        console.error('Error guardando el archivo JSON:', error);
        return false;
    }
};


export const f_write_string = async (namefile: string, data: string) => {
    try {
        const nameFile = namefile.replace(/\./g, "").replace('txt','');
        const name = nameFile.split('/').pop();
        const dir = path.dirname('./src/file/' + nameFile);
        const filepath = path.join(dir, name + '.txt');

        // Crear el directorio, incluidas todas las subcarpetas necesarias
        await fs.mkdir(dir, { recursive: true });

        await fs.writeFile(filepath, data, 'utf-8');
        //console.log(`Datos guardados correctamente en ./src/file/save/${namefile}.json`);
        // Leer el archivo para confirmar que se ha guardado correctamente
        await fs.readFile(filepath, 'utf-8');

        return true;
    } catch (error) {
        console.error('Error guardando el archivo JSON:', error);
        return false;
    }
};


