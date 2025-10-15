import { useCallback, useEffect, useMemo, useState } from "react";

interface PaginationInterface {
    id: string,
    title: string,
    items: Array<any>,
    enforceRows?: number,
    enforceCols?: number
};

const Pagination = ({ id, title, items, enforceRows, enforceCols }: PaginationInterface): JSX.Element => {
    const [page, setPage] = useState(1);
    const [rows, setRows] = useState((enforceRows ?? 1));
    const [cols, setCols] = useState((enforceCols ?? 2));

    const updateItemsPerPage = useCallback((): void => {
        if (!enforceRows) setRows((window.innerHeight < 600 ? 1 : 2));
        if (!enforceCols) setCols((window.innerWidth < 1360 ? 2 : 3));
    }, [enforceRows, enforceCols, setRows, setCols]);

    useEffect(() => {
        window.addEventListener("resize", updateItemsPerPage);
        updateItemsPerPage();
    }, [updateItemsPerPage]);

    const handlePageChange = useCallback((event: any): void => setPage(Number(event.target.id)), [setPage]);

    const calculatePageNumbers = useCallback((): Array<number> => {
        const totalPages = Math.ceil(items.length / (rows * cols));
        
        return Array.from({ length: totalPages }, (_, index) => index + 1);
    }, [items, rows, cols]);
    
    const getCurrentItems = useCallback((): Array<any> => {
        const indexOfLastItem = page * (rows * cols);
        const indexOfFirstItem = indexOfLastItem - (rows * cols);

        return items.slice(indexOfFirstItem, indexOfLastItem);
    }, [page, rows, cols, items]);

    const Items = useMemo(() => {
        const currentItems = getCurrentItems();

        if (rows == 1) {
            return (
                <div className="items-container">
                    {currentItems}
                </div>
            );
        }

        return (
            <div className="items-container">
                {currentItems.slice(0, (currentItems.length / rows))}
                {currentItems.slice((currentItems.length / rows), currentItems.length)}
            </div>
        );
    }, [getCurrentItems, rows]);

    const AvaiablePages = useMemo(() => {
        const pageNumbers = calculatePageNumbers();

        return (
            <ul className="pagination">
                {
                    pageNumbers.map((number) => (
                        <li
                            key={number}
                            id={String(number)}
                            onClick={handlePageChange}
                            className={(page === number ? "active" : "")}>
                            {number}
                        </li>
                    ))
                }
            </ul>
        );
    }, [calculatePageNumbers, handlePageChange, page]);
    
    return (
        <div className={id} id={id}>
            <h1>{title}</h1>
            <div className="items">
                {Items}
            </div>
            <div className="pagination">
                {AvaiablePages}
            </div>
        </div>
    );
};

export default Pagination;