import React from 'react';
import { connect, useDispatch } from 'react-redux';
import DropdownAction from '~/components/elements/basic/DropdownAction';
import { getProducts } from '~/store/products/action';

const TableProjectItems = () => {

    const dispatch = useDispatch();
    const fetchProducts = () => {
        dispatch(getProducts());
    }

    const state = useSelector(state => ({
        ...state.allProducts
    }))

    useEffect(() => {
        dispatch(fetchProducts());
    }, [dispatch]);

    const tableItems = allProducts?.map((item, index) => {
        let badgeView;
        if (item.stock) {
            badgeView = <span className="ps-badge success">Stock</span>;
        } else {
            badgeView = <span className="ps-badge gray">Out of stock</span>;
        }
        return (
            <tr key={item.sku}>
                <td>{index + 1}</td>
                <td>
                    <a href="#">
                        <strong>{item.name}</strong>
                    </a>
                </td>
                <td>{item.sku}</td>
                <td>{badgeView}</td>
                <td>
                    <strong>{item.price}</strong>
                </td>
                <td>
                    <p className="ps-item-categories">
                        {item.categories.map((cat) => (
                            <a href="#" key={cat.name}>
                                {cat.name}
                            </a>
                        ))}
                    </p>
                </td>
                <td>{item.date}</td>
                <td>
                    <DropdownAction />
                </td>
            </tr>
        );
    });
    return (
        <div className="table-responsive">
            <table className="table ps-table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nom</th>
                        <th>SKU</th>
                        <th>Stock</th>
                        <th>Prix</th>
                        <th>Catégories</th>
                        <th>Date</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>{tableItems}</tbody>
            </table>
        </div>
    );
};

export default connect(state => state.app)(TableProjectItems);
