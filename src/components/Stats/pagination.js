import React from "react";
const Pagination = (props) => {

    return (
        <nav aria-label="Page navigation example">
            <ul class="pagination justify-content-end">
                <li class="page-item disabled">
                    <a class="page-link" tabindex="-1">Previous</a>
                </li>
                <li class="page-item"><a class="page-link" >1</a></li>
                <li class="page-item"><a class="page-link">2</a></li>
                <li class="page-item"><a class="page-link">3</a></li>
                <li class="page-item"><a class="page-link">Next</a></li>
            </ul>
        </nav>
    );
};

export default Pagination;