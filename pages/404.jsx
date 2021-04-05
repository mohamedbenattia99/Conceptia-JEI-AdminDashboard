import React from 'react';
import Link from 'next/link';

function Error({ statusCode }) {
    return (
        <div className="ps-page--404">
            <figure className="ps-block--notfound">
                <h3>Ohh! Page non trouvée</h3>
                <p>
                Il semble que nous ne trouvons pas ce que vous cherchez. <br />
                </p>
                <p>
                    <strong className="mr-2">Return to</strong>
                    <Link href="/">
                        <a className="ps-btn ps-btn--black ps-btn--rounded ps-btn--sm">
                            Tableau de bord
                        </a>
                    </Link>
                </p>
            </figure>
        </div>
    );
}

export default Error;
