import React from 'react';
import { Table } from 'rsuite';
import 'rsuite/dist/rsuite-no-reset.min.css';

const { Column, HeaderCell, Cell } = Table;


const StudentsList = ({students}) => {
    const [sortColumn, setSortColumn] = React.useState();
    const [sortType, setSortType] = React.useState();
    const [loading, setLoading] = React.useState(false);

    const getData = () => {
        if (sortColumn && sortType) {
            return students.sort((a, b) => {
                let x = a[sortColumn];
                let y = b[sortColumn];
                if (typeof x === 'string') {
                    x = x.charCodeAt();
                }
                if (typeof y === 'string') {
                    y = y.charCodeAt();
                }
                if (sortType === 'asc') {
                    return x - y;
                } else {
                    return y - x;
                }
            });
        }
        return students;
    };

    const handleSortColumn = (sortColumn, sortType) => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
            setSortColumn(sortColumn);
            setSortType(sortType);
        }, 500);
    };

    return (
        <Table
            bordered={true}
            data={getData()}
            sortColumn={sortColumn}
            sortType={sortType}
            onSortColumn={handleSortColumn}
            loading={loading}
            autoHeight={true}
        >
            <Column align="center" flexGrow={2} sortable>
                <HeaderCell>ID</HeaderCell>
                <Cell dataKey="id" />
            </Column>

            <Column flexGrow={2} sortable>
                <HeaderCell>ФИО</HeaderCell>
                <Cell dataKey="fio" />
            </Column>

            <Column flexGrow={2} sortable>
                <HeaderCell>Группа</HeaderCell>
                <Cell dataKey="group" />
            </Column>
        </Table>
    );
};

export default StudentsList;