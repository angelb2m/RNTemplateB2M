const BINANCE_API = "https://api.binance.com/api/v1/";



class Api {

    async getCategoryList() {
        const query = await fetch(`${WP_API}categories`, { headers: { 'Cache-Control': 'no-cache' } })
        const wpCategoryList = await query.json();
        return (
            wpCategoryList
        )
    }
}

export default new Api();
