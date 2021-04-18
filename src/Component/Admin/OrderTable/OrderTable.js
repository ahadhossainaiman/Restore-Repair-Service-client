import React from 'react';

const OrderTable = (props) => {
    const { name, email, serviceName, process } = props.orderInfo;
    return (
        <>
            <tr>
                <th scope="row">{name}</th>
                <td>{email}</td>
                <td>{serviceName}</td>
                <td>Credit Cart</td>
                <td>
                    {
                        process === "pending" && 
                    <select className="browser-default custom-select">
                        <option selected>{process}</option>
                        <option value="ongoing">ongoing</option>
                        <option value="done">done</option>
                    </select>
                    }
                    {
                        process === "ongoing" && 
                    <select className="browser-default custom-select">
                        <option selected>{process}</option>
                        <option value="pending">pending</option>
                        <option value="done">done</option>
                    </select>
                    }
                    {
                        process === "done" && 
                    <select className="browser-default custom-select">
                        <option selected>{process}</option>
                        <option value="ongoing">ongoing</option>
                        <option value="pending">pending</option>
                    </select>
                    }
                </td>
            </tr>
        </>
    );
};

export default OrderTable;