import CoinRows from "../CoinRows/CoinRows"

const titles = ['#','Moneda', 'Precio', 'Precio cambio', '24H Cambios']

const TableCoins = ({ coins, search }) => {
    const filtro = coins.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()) | coin.symbol.toLowerCase().includes(search.toLowerCase())) 
    return(
        <table className="table table-dark mt-4 table-hover">
            <thead>
                <tr>
                    {titles.map((title,index)=>(
                        <td key={index}>{title}</td>
                    ))}
                    
                </tr>
            </thead>
            <tbody>
                {filtro.map((coin,index) =>(
                    <CoinRows coin={coin} key={index} index={index + 1}/>
                ))}
            </tbody>
        </table>)
}

export default TableCoins