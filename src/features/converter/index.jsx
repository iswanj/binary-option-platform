import { Pane, Card } from "../styles";
import { Header } from "./styles";

export const Converter = () => {
  return (
    <Pane>
      <Card>
        <Header>Currency Converter</Header>
        <div>
          <form>
            <div>
              <label>Amount</label>
              <input value="" />
            </div>
            <div>
              <label>From (Base)</label>
              <select>
                <option value="usd">USD</option>
              </select>
            </div>
            <div>
              <label>To</label>
              <select>
                <option value="usd">USD</option>
              </select>
            </div>
            <div>
              <button>Convert</button>
            </div>
          </form>
        </div>
      </Card>
    </Pane>
  );
};
