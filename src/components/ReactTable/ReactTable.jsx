import { MaterialReactTable } from 'material-react-table'
import { useMemo } from 'react'

const ReactTable = () => {
    const columns = useMemo(
        () => [
            { accessorKey: 'id', header: 'ID' },
            { accessorKey: 'name', header: 'Name' },
            { accessorKey: 'email', header: 'Email' },
            { accessorKey: 'age', header: 'Age' },
            { accessorKey: 'city', header: 'City' },
        ],
        []
    )

    const data = useMemo(
        () =>
            Array.from({ length: 30 }, (_, i) => ({
                id: i + 1,
                name: `User ${i + 1}`,
                email: `user${i + 1}@test.com`,
                age: 20 + (i % 10),
                city: ['Delhi', 'Mumbai', 'Pune', 'Bangalore'][i % 4],
            })),
        []
    )

    return (
        <div className='min-h-screen bg-gray-100 p-6'>
            <div className='mx-auto max-w-6xl rounded-xl bg-white p-4 shadow'>

                <h1 className='mb-4 text-xl font-semibold text-gray-800'>Users</h1>

                <MaterialReactTable
                    columns={columns}
                    data={data}
                    enableGlobalFilter
                    enableColumnFilters
                    enableSorting
                    enableMultiSort
                    enableColumnResizing
                    enableColumnOrdering
                    enableHiding
                    enableRowSelection
                    enableDensityToggle
                    enableColumnPinning
                    enableStickyHeader
                    initialState={{
                        pagination: { pageSize: 5, pageIndex: 0 },
                    }}
                />
            </div>
        </div>
    )
}

export default ReactTable