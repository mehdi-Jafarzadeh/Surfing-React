import "./P3.css"

const items = [
    { "url": "assets/Item-2.png" },
    { "url": "assets/Item.png" },
    { "url": "assets/Item-1.png" }
]

const P3 = () => {
    return (
        <>
            <p className="p3-ti-des">SHOP</p>
            <h1 className="p3-title">Surfboards</h1>
            <div className="p3-curasel">
                <p className="p3-cont">{"<"}</p>
                <div className="items">
                    {items.map(e => <img src={e.url} />)}
                </div>
                <p className="p3-cont">{">"}</p>
            </div>
            <p className="p3-link">SHOW ALL</p>
        <hr className="p3-link-l" />
        </>
    );
}

export default P3;
