import Hashs from 'jshashes'

function makeHash(str: string) {
  return new Hashs.SHA256().hex(str);
}

export default function useFetchMemo () {
  
  return {
    register(url:string, response:any): void|unknown {
      if (url.length === 0) throw new Error('Argumento obrigatorios');

      if (!window.sessionStorage) return console.error("Navegador incopatível com recurso sessionStorage")
      const hash = makeHash(url)
      window.sessionStorage.setItem(hash, JSON.stringify(response))
    },

    getItem(query:string): object|boolean {
      const hash = makeHash(query)
      const data = window.sessionStorage.getItem(hash)
      return data ? JSON.parse(data) : false
    }
  }

}
