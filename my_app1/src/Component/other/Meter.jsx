
import { getMeter, saveMeter, deleteMeter } from '../services/meter';
import { useEffect, useState } from 'react';




let Meter = () => {


    let [productList, setProductList] = useState([]);
    let [productForm, setProductForm] = useState({});




    useEffect(() => {
        let pobj = getMeter();

        pobj.then((response) => {
            console.log(JSON.stringify(response.data, null, 3));
            setProductList(response.data);
        });

        pobj.catch((error) => {
            console.log(JSON.stringify(error, null, 3));
        });

    }, []);









    let collectInfo = (event) => {
        setProductForm({ ...productForm, [event.target.name]: event.target.value });
    }









    let save = (event) => {
        console.clear();

        console.log(JSON.stringify(productForm, null, 3));
        let pobj = saveMeter(productForm);

        pobj.then((response) => {
            window.location.reload();
            console.log(JSON.stringify(response, null, 3));
        });

        pobj.catch((error) => {
            console.log(JSON.stringify(error, null, 3));
        });
    }







    let remove = (event) => {
        let pobj = deleteMeter(event.target.id);

        pobj.then((response) => {
            window.location.reload();
            console.log(JSON.stringify(response.status, null, 3));

        });

        pobj.then((error) => {
            console.log(JSON.stringify(error, null, 3));
        });
    }








    return (

        <div>


            < div className="container-xl" >

                <div className="row my-3">
                    <div className="col-md-3">
                        <input type="search" className="form-control" />
                    </div>

                    <div className="col-md-2">
                        <select className="form-select">
                            <option value="select">Select</option>
                        </select>
                    </div>

                    <div className="col-md-2">
                        <button className="btn btn-sm btn-success my-1" data-bs-toggle="modal" data-bs-target="#productModal">Add New</button>
                    </div>
                </div>

                <div className="row my-3">
                    <table className="table table-hover">
                        <thead>
                            <tr>
                                <th>Id</th>
                                <th>reading type</th>
                                <th>status</th>


                            </tr>
                        </thead>

                        <tbody>











                            {
                                productList.map(item =>
                                    item.status === "online" ? (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.readingtype}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <button
                                                    id={item.id}
                                                    className="btn btn-sm btn-danger"
                                                    onClick={remove}
                                                >
                                                    delete
                                                </button>










                                            </td>
                                        </tr>
                                    ) : null
                                )}



                            {
                                productList.map(item =>
                                    item.status === "offline" ? (
                                        <tr key={item.id}>
                                            <td>{item.id}</td>
                                            <td>{item.readingtype}</td>
                                            <td>{item.status}</td>
                                            <td>
                                                <button
                                                    id={item.id}
                                                    className="btn btn-sm btn-danger"
                                                    onClick={remove}
                                                >
                                                    delete
                                                </button>
                                            </td>
                                        </tr>
                                    ) : null
                                )}








                        </tbody>
                    </table>

                </div>



            </div >




            <div class="modal fade" id="productModal" tabindex="-1" aria-labelledby="productModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="productModalLabel">Edit Meter</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row my-2">


                                <div className="col-md-10">
                                    <input type="text" placeholder="reading type" className="form-control" name="readingtype" onChange={collectInfo} />
                                </div>
                            </div>

                            <div className="row my-2">
                                <div className="col-md-6">



                                    <select name="status" id="cars" onChange={collectInfo}>
                                        <option value="status">status</option>
                                        <option value="online">online</option>
                                        <option value="offline">offline</option>

                                    </select>


                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary text-center" data-bs-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-primary text-center" onClick={save}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}

export default Meter;