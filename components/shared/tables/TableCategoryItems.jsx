import React, { Component } from 'react';
import { connect } from 'react-redux';

class TableCategoryItems extends Component {





    render() {

        const allCategories=this.props.allCategories ;
        const tableItems = allCategories && this.props.allCategories.map((item) => {
return(
                <tr key={item.bfdb}>
                    <td>
                        <strong>{item.name}</strong>
                    </td>
                    <td>{item.slug}</td>

                </tr>)
            });
        console.log(this.props.allCategories)

        return (
            <div className="table-responsive" >
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>Nom de la catégorie</th>
                            <th>Slug</th>
                        </tr>
                    </thead>
                    <tbody>{tableItems}
                    </tbody>
                </table>

            </div>
        );
    }
};

export default connect((state) => state.categories)(TableCategoryItems);
