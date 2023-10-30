type PaginationProps = {
    total_item: number
    page_size: number
    pages: number
    current_page: number
    page: (page_no: number) => void
    lock?: boolean
}

const Pagination = (props: PaginationProps) => {
    const { pages, current_page, page, total_item, page_size, lock } = props;

    let startPage = current_page + 1;
    if (startPage > 0) {
        startPage = (page_size * current_page) + 1
    }

    let endPage = startPage + page_size - 1;
    if (endPage >= total_item) {
        endPage = total_item
    }

    return (
        <div className="pagination">
            <div className="pagination-info"><span>
                {startPage ? startPage : 0} - {endPage ? endPage : 0}  &nbsp;
                of</span> {total_item ? total_item : 0}</div>
            <div className="pagination-nav">
                <button
                    onClick={() => page(0)}
                    disabled={current_page === 0 ? true : false}
                    id="pagination-first"
                    className="icon-badge double-arrows">
                    <i className="fa fa-angle-double-left"></i>
                </button>
                <button
                    onClick={() => page(current_page - 1)}
                    disabled={current_page === 0 ? true : false}
                    id="pagination-prev"
                    className="icon-badge double-arrows">
                    <i className="fa fa-angle-left"></i>
                </button>
                <button
                    onClick={() => page(current_page + 1)}
                    disabled={current_page === (pages - 1) ? true : false}
                    id="pagination-next"
                    className="icon-badge double-arrows">
                    <i className="fa fa-angle-right"></i>
                </button>
                <button
                    onClick={() => page(pages - 1)}
                    disabled={current_page === (pages - 1) || lock ? true : false}
                    id="pagination-last"
                    className="icon-badge double-arrows">
                    <i className="fa fa-angle-double-right"></i>
                </button>
            </div>
        </div>
    );
}

export default Pagination;