import React, { Component, useEffect } from 'react';
import { connect} from 'react-redux';
import { withRouter} from "next/router";

class TableNewsletterItems extends Component {

    constructor(props) {
        super(props);
        this.state ={
            valid : [] ,
            visibility:true ,
            delivered : false ,
            router : this.props.router
         }

    }
    componentDidMount() {
       if(this.props.allNewsletter && !this.props.newsletterLoading  && Array.isArray(this.props.allNewsletter)) this.setState({valid : this.props.allNewsletter.map(newsletter=>newsletter.valid),delivered : this.props.allNewsletter.map(newsletter=>newsletter.delivered)})

    }

    render() {   
        const allNewsletter =this.props.allNewsletter ;
        const newsletterLoading =this.props.newsletterLoading;
        const tableItemsView = (!(newsletterLoading) && Array.isArray(allNewsletter) )? allNewsletter.map((item) => {
            return (
                <tr key={item.email}>
                    <td><strong>{item.email}</strong></td>
                </tr>
            );
        }): null ;

        return (
            <div className="table-responsive">
                <table className="table ps-table">
                    <thead>
                        <tr>
                            <th>EMAIL CLIENT</th>

                        </tr>
                    </thead>
                    <tbody>{tableItemsView}</tbody>
                </table>
            </div>
        );
    }
};

export default withRouter( connect(state => state.newsletter)(TableNewsletterItems));
