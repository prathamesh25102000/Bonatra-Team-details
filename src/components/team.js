import React, { useEffect } from "react";
import { useState } from "react";
const Team = () => {
    const [name, setname] = useState("business")

    const [b, setb] = useState("business")
    const [v, setv] = useState(null)
    const obj = {
        "business": ["https://www.venwiz.com/images/employees/employees%202x/rakesh.jpg", "https://www.venwiz.com/images/employees/employees%202x/Shubham.jpg", "https://www.venwiz.com/images/employees/employees%202x/Philip.jpg", "https://www.venwiz.com/images/employees/employees%202x/nikhilPn.jpg", "https://www.venwiz.com/images/employees/employees%202x/kbs.jpg"],
        "strategy": ["https://www.venwiz.com/images/employees/employees%202x/Siddhant.jpg", "https://www.venwiz.com/images/employees/employees%202x/Saurabh.jpg", "https://www.venwiz.com/images/employees/employees%202x/abhimanyu.jpg"],
        "product": ["https://www.venwiz.com/images/employees/employees%202x/Nikhil%20Mehta.jpg", "https://www.venwiz.com/images/employees/employees%202x/Rupa.jpg", "https://www.venwiz.com/images/employees/employees%202x/Saish.jpg", "https://www.venwiz.com/images/employees/employees%202x//saurabhSha.jpg", "https://www.venwiz.com/images/employees/employees%202x//parveenBhanuM.jpg"],
        "marketing": ["https://www.venwiz.com/images/employees/employees%202x/mehul-mithali.jpg", "https://www.venwiz.com/images/employees/employees%202x/krithika.jpg"],
        "engg": ["https://www.venwiz.com/images/employees/employees%202x/Junaid.jpg", "https://www.venwiz.com/images/employees/employees%202x/sameer.jpg", "https://www.venwiz.com/images/employees/employees%202x/praveen.jpg", "https://www.venwiz.com/images/employees/employees%202x/Swati.jpg", "https://www.venwiz.com/images/employees/employees%202x/apurv.jpg", "https://www.venwiz.com/images/employees/employees%202x/prathviraj.jpg", "https://www.venwiz.com/images/employees/employees%202x/raviJaisawal.jpg"],
        "spl": ["https://www.venwiz.com/images/employees/employees%202x/nikhil-jain.jpg", "https://www.venwiz.com/images/employees/employees%202x/Kavitha.jpg"]
    }
    const [a, seta] = useState(obj.business)

    useEffect(() => {
        seta(obj[name])
        console.log(name)


    }, [name])

    useEffect(() => {
        let q = a.map((e, i) => {
            return (
                <div className='pic container'>
                    <img key={i} src={e} height="200px" width="200px" />
                </div>
            )
        })

        setv(q)
    }, [a])

    function He(e) {
        e.preventDefault();
        setname(e.target.id)
        //console.log(name)
        setb(name)
        //seta(obj[b])
        //console.log(a)



    }
    return (
        <>
            <div className="container">
                <h2 style={{ "textAlign": "center", "fontSize": "46px", "lineHeight": "1.2", "marginBottom": "30px", "marginTop": "60px" }}>Our Team</h2>

                <div className="row justify-content-md-center">
                    <div className="col col-md-auto" >
                        <p className='p1' onClick={He} id="business">Business</p>

                    </div>
                    <div className="col-md-auto" >
                        <p className='p1' onClick={He} id="strategy">Strategy</p>
                    </div>
                    <div className="col-md-auto" >
                        <p className='p1' onClick={He} id="product">Product</p>
                    </div>
                    <div className="col-md-auto" >
                        <p className='p1' onClick={He} id="marketing">Marketing</p>
                    </div>
                    <div className="col-md-auto" >
                        <p className='p1' onClick={He} id="engg">Engineering</p>
                    </div>
                    <div className="col col-md-auto" >
                        <p className='p1' onClick={He} id="spl">Specialist</p>
                    </div>
                </div>
            </div>
            <div className='allpics'>{v}</div>
        </>
    )

}

export default Team