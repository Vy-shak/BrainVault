import axios from "axios";


const fetchData = async (setterfn: (data: any) => void, linktype: string) => {
    try {
        const token = await localStorage.getItem('token');
        const response = await axios.get('http://localhost:3000/api/v1/content/show', {
            headers: {
                'Content-Type': 'application/json',
                'token': token,
                'linktype': linktype,
            }
        });
        const data = await response.data.details;
        if (data) {
            setterfn(data)
        };
    } catch (error) {
        console.log("fetching error", error)
    }
}

export { fetchData }