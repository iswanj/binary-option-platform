import styled from "styled-components";

export const Header = styled.h1`
  font-size: 1.2rem;
  color: #333;
`;

export const Controller = styled.div`
  display: flex;
  flex-direction: ${(props) => (props.col ? "column" : "row")};
  padding: 0.4rem 4rem;
`;

export const Button = styled.button`
  display: flex;
  flex-grow: 1;
  align-items: center;
  justify-content: center;
  background-color: #0d47a1;
  color: #fff;
  padding: 14px 20px;
  border: 0;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 2px;
  margin-top: 1rem;

  &:hover {
    background-color: #1565c0;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-grow: 1;
  font-size: 0.9rem;
  color: #444;
  font-weight: 500;
  width: 200px;
  align-items: center;
  margin-bottom: 4px;
`;

export const Input = styled.input`
  padding: 5px;
  display: block;
  overflow: hidden;
  width: calc(100% - 233px);
`;

export const Link = styled.a`
  display: inline-block;
  color: #0d47a1;
  font-size: 1rem;
  font-weight: 700;
  flex-grow: 1;
`;

export const ResultValue = styled.p`
  font-size: 1rem;
  font-weight: 600;
`;

export const TableWrapper = styled.section`
  margin-top: 1rem;
  padding: 0 4rem;
`;

export const Table = styled.div`
  width: 100%;
  display: table;
`;

export const TableBody = styled.div`
  display: table-row-group;
`;

export const TableRow = styled.div`
  display: table-row;
`;

export const TableCelHead = styled.div`
  display: table-cell;
  border: 1px solid #dddddd;
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  font-weight: 700;
`;

export const TableCel = styled.div`
  display: table-cell;
  border: 1px solid #dddddd;
  padding: 8px;
  line-height: 1.42857143;
  vertical-align: top;
  text-align: left;
`;

export const BackContainer = styled.div``;

export const Form = styled.div`
  margin-top: 20px;
`;

export const Pane = styled.section`
  display: flex;
  flex-direction: column;
  padding: 4em;
  background: #eee;
  min-height: 100vh;
`;

export const Card = styled.div`
  background: #fff;
  box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.3);
  -webkit-box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.3);
  -moz-box-shadow: 2px 2px 3px 0px rgba(0, 0, 0, 0.3);
  min-height: 200px;
  padding: 1rem;
`;
