import React, { useEffect } from 'react';
import { Outlet, useLoaderData, Form, useSubmit } from 'react-router-dom';
import EntryTable from '../components/EntryTable/EntryTable';
import { getEntries } from '../data/entries';

export async function loader({ request }) {
    const url = new URL(request.url);
    const q = url.searchParams.get("q");
    const entries = await getEntries(q);
    return { entries, q };
}

const Root = () => {
    const { entries, q } = useLoaderData();
    const submit = useSubmit();

    useEffect(()=> {
        document.getElementById("q").value = q;
    }, [q]);

    return (
        <div class="page">
            <div class="header">
                <h1>Training Blog</h1>
                <div>
                    Updates on my progress training to climb Mt. Rainier in August.
                </div>
            </div>

            <div id="content">
                <div id="searchbar">
                    <Form id="search-form" role="search">
                        <input
                            id="q"
                            aria-label="Search entries"
                            placeholder="Search"
                            type="search"
                            name="q"
                            onChange={(evt) => {
                                const firstSearch = q == null;
                                submit(evt.currentTarget.form, {
                                    replace: !firstSearch,
                                });
                            }}
                        ></input>
                    </Form>
                </div>
                {entries.length ? (
                    <EntryTable entries={ entries } />
                ): (
                    <p>No Entries</p>
                )}
            </div>
        </div>
    );
};

export default Root;