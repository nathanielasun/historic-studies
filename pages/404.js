//404 page for Historic Studies Limited
import Link from 'next/link';
const page404 = () => {
    return (
        <>
            <section style={{
                width: "95vw",
                height: "95vh",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
            }}>
                <div>
                <h1 style={{
                    margin: "auto",
                    textAlign: "center",
                    fontSize: "36px",
                }}
                >404 | Page not found / page under construction
                </h1>
                </div>
                <Link href="/" style={{textAlign:"center", fontSize:"24px"}}>Back to home page</Link>
            </section>
        </>
    );
};

export default page404;