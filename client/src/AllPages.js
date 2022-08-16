import React from "react";
import {useQuery, gql } from '@apollo/client';

const PAGES_QUERY = gql`
    query {
        pages {
            title
        }
    }
`

const AllPages = () => {

    const { data } = useQuery(PAGES_QUERY);

    return (
        <div>
            Hello
            { data && (
                <div>
                    {data.pages.map((page, idx)=>
                        <p key={idx}>{page.title}</p>
                    )}
                </div>
            )}
        </div>
    )
}

export default AllPages;