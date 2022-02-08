import {
  Pane,
  Card,
  Header,
  Controller,
  Link,
  Input,
  Label,
  Form,
  ResultValue,
} from "./styles";

import { useDispatch, useSelector } from "react-redux";
import { converterValues, changeField } from "./converterSlice";
import { loadCurrencies, loadPairRate } from "./converterSaga";
import { useEffect } from "react";

import { Dropdown } from "../dropdown";

export const Converter = () => {
  const dispatch = useDispatch();
  const { codes, baseCurrency, amount, convertCurrency, pairRate } =
    useSelector(converterValues);

  const handleFieldChange = (value, name) => {
    dispatch(
      changeField({
        name,
        value,
      })
    );
  };

  useEffect(() => {
    dispatch(loadCurrencies());
    dispatch(loadPairRate({ from: baseCurrency, to: convertCurrency }));
  }, [baseCurrency, convertCurrency, dispatch]);

  return (
    <Pane>
      <Card>
        <Header>Currency Converter</Header>
        <Link href="/rates">Show Rates</Link>
        <Form>
          <Controller>
            <Label>Amount</Label>
            <Input
              type="number"
              placeholder="Type value you wants to convert..."
              value={amount}
              onChange={(e) => handleFieldChange(e.target.value, "amount")}
            />
          </Controller>
          <Controller>
            <Label>From (Base)</Label>
            <Dropdown
              value={baseCurrency}
              onChange={(e) =>
                handleFieldChange(e.target.value, "baseCurrency")
              }
              options={codes}
            />
          </Controller>
          <Controller>
            <Label>To</Label>
            <Dropdown
              value={convertCurrency}
              onChange={(e) =>
                handleFieldChange(e.target.value, "convertCurrency")
              }
              options={codes}
            />
          </Controller>
          <Controller>
            <Label>Result</Label>
            <ResultValue>{pairRate}</ResultValue>
          </Controller>
        </Form>
      </Card>
    </Pane>
  );
};
