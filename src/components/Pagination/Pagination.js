import { 
  ItemPagination, 
  ContainerPagination, 
  CheckedPagination 
} from './Pagination.styled'
import PropTypes from 'prop-types'
const Pagination = ({ postsPerPage, totalPosts, currentPage = 0, setCurrentPage }) => {
const paginate = pageNumber => setCurrentPage(pageNumber-1);
const pageNumbers = [];
for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
  pageNumbers.push(i);
}
return (
    <ContainerPagination>
      {pageNumbers.map(number => (
          currentPage+1 === number ? 
          <CheckedPagination key={number} onClick={() => paginate(number)}>
            {number}
          </CheckedPagination>
          :
          <ItemPagination key={number} onClick={() => paginate(number)}>
            {number}
          </ItemPagination>
      ))}
    </ContainerPagination>
);
}
Pagination.propTypes = {
postsPerPage: PropTypes.number,
totalPosts: PropTypes.number,
currentPage: PropTypes.number,
setCurrentPage: PropTypes.func,
}
export default Pagination
