import axios from "axios"
export default async function GET(URL) {
    try {
        const res = await axios.get(URL)
        return res.data
    } catch (error) {
        console.log(error)
    }
}