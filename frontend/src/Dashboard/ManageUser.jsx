import { Table } from 'flowbite-react'
import React, { useEffect, useState } from 'react'
import { Pagination } from 'flowbite-react';
import { Link } from 'react-router-dom';

const ManageUser = () => {
    const [allBooks, setAllBooks] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/auth/all-user`)
            .then((res) => res.json())
            .then((data) => {
                // console.log(data);
                setAllBooks(data);
            });
    }, []);

    // delete a books
    const handleDelete = (id) => {
        // Make the DELETE request to delete the user
        fetch(`http://localhost:5000/auth/user/${id}`, {
            method: "DELETE",
        })
        .then((res) => res.json())
        .then((data) => {
            // After successful deletion, reload the page
            window.location.reload();
        })
        .catch((error) => {
            console.error('Error deleting user:', error);
            // Handle errors if necessary
        });
    };

    // pagination
    const [currentPage, setCurrentPage] = useState(1);
    const onPageChange = () => setCurrentPage(page);

    return (
        <div className='px-4 my-12'>
            <h2 className='mb-8 text-3xl font-bold'>Manage Users</h2>

            {/* table */}

            <Table className='lg:w-[1180px]'>
                <Table.Head>
                    <Table.HeadCell>
                        No.
                    </Table.HeadCell>
                    <Table.HeadCell>
                        User Name
                    </Table.HeadCell>
                    <Table.HeadCell>
                        user email
                    </Table.HeadCell>
                    <Table.HeadCell>
                        Role
                    </Table.HeadCell>
                    {/* <Table.HeadCell>
                        Price
                    </Table.HeadCell> */}
                    <Table.HeadCell>
                        Manage
                    </Table.HeadCell>
                </Table.Head>

                {
                    allBooks.map((book, index) => <Table.Body className="divide-y" key={book._id}>
                        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {index + 1}
                            </Table.Cell>
                            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                                {book.name}
                            </Table.Cell>
                            <Table.Cell>
                                {book.email}
                            </Table.Cell>
                            <Table.Cell>
                                {book.role}
                            </Table.Cell>
                            {/* <Table.Cell>
                                $10.99
                            </Table.Cell> */}
                            <Table.Cell>
                                {/* <Link
                                    className="font-medium text-cyan-600 hover:underline dark:text-cyan-500 mr-5"
                                    to={`/admin/dashboard/edit-books/${book._id}`}
                                >
                                    Edit
                                </Link> */}
                                <button className='bg-red-600 px-4 py-1 font-semibold text-white rounded-sm hover:bg-sky-600' onClick={() => handleDelete(book._id)}>Delete</button>

                            </Table.Cell>
                        </Table.Row>
                    </Table.Body>)
                }
            </Table>

            {/* pagination */}
            <div className="flex items-center justify-center text-center mt-8">
                <Pagination
                    currentPage={1}
                    layout="pagination"
                    nextLabel="Go forward"
                    onPageChange={page => { setCurrentPage(page) }}
                    previousLabel="Go back"
                    showIcons
                    totalPages={1000}
                />
            </div>
        </div>
    )
}

export default ManageUser