import { Controller, Header, Label } from "../converter/styles";

import {
  TableWrapper,
  Table,
  BackContainer,
  TableBody,
  TableCel,
  Link,
  TableRow,
  Pane,
  Card,
} from "./styles";

import { Dropdown } from "../dropdown";

import { useDispatch, useSelector } from "react-redux";
import { converterValues, changeField } from "./converterSlice";
import { loadRates } from "./converterSaga";
import { useEffect } from "react";

export const RateTable = () => {
  const dispatch = useDispatch();
  const { baseCurrency, codes, rates } = useSelector(converterValues);
  useEffect(() => {
    dispatch(loadRates(baseCurrency));
  }, [baseCurrency, dispatch]);

  const handleChangeCurrency = (e) => {
    dispatch(
      changeField({
        name: "baseCurrency",
        value: e.target.value,
      })
    );
  };

  return (
    <Pane>
      <Card>
        <BackContainer>
          <Link href="/">Back</Link>
        </BackContainer>
        <Header>Exchange Rates</Header>
        <div>
          <form>
            <Controller col>
              <Label>Base Currency</Label>
              <Dropdown
                value={baseCurrency}
                onChange={handleChangeCurrency}
                options={codes}
              />
            </Controller>
          </form>
        </div>
        <TableWrapper>
          <Table>
            <TableBody>
              {rates.map((rate) => (
                <TableRow key={rate.currency}>
                  <TableCel>{rate.currency}</TableCel>
                  <TableCel>{rate.rate}</TableCel>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableWrapper>
      </Card>
    </Pane>
  );
};
