import { HttpClient } from '../http-client'

const http = new HttpClient({ baseUrl })

http.onError(() => {})
