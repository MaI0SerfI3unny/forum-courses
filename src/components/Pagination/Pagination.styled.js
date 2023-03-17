import css from '@styled-system/css'
import styled from 'styled-components'

export const ContainerPagination = styled.ul(
    css({
      display: 'flex',
      padding: 0
    }),
)
export const ItemPagination = styled.li(
    css({
        padding: "10px",
        minWidth: "20px",
        maxWidth: "21px",
        textAlign:"center",
        marginLeft: "10px",
        listStyleType: "none",
        border: "1px solid #1C8DCC",
        borderRadius: "5px",
        cursor: "pointer",
        color: "#1C8DCC",
        ":first-child":{
            marginLeft: "0px"
        }
    }),
)
export const CheckedPagination = styled.li(
    css({
        padding: "10px",
        minWidth: "20px",
        maxWidth: "21px",
        textAlign:"center",
        marginLeft: "10px",
        listStyleType: "none",
        border: "1px solid #1C8DCC",
        borderRadius: "5px",
        cursor: "pointer",
        color: "white",
        background:"#1C8DCC",
        ":first-child":{
            marginLeft: "0px"
        }
    }),
)