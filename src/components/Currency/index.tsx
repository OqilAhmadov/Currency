
import {
  CurrencyOption,
  CurrencySelect,
  DeleteIcon,
  CurrencyWrapper,
  SelectBox,
  SelectNumber,
} from "./Currency.style";


interface PropsTypes {
    option: string;
    // sum: any;
    currencyValue: any;
    Currencies: any;
    onCurrencyChange: (e: any) => void;
    handleDelete: (i: any) => void;
}

const Currency: React.FC<PropsTypes> = (props) => {
  

  return (
    <CurrencyWrapper>
      <SelectBox>
        <CurrencySelect value={props.currencyValue} onChange={e => props.onCurrencyChange(e.target.value)} >
            {props.Currencies.map((item: any, index: number) => {
                return(
          <CurrencyOption key={item} >{item}</CurrencyOption>
                )
            })}
        </CurrencySelect>
        {/* <SelectNumber type="number"  value={props.amount} onChange={e => props.onChangeAmount(e.target.value)}  /> */}
        {/* <SelectNumber>{props.sum}</SelectNumber> */}
        <DeleteIcon onClick={i => props.handleDelete(i)} sx={{ color: "red" }} />
      </SelectBox>
    </CurrencyWrapper>
  );
};

export default Currency;
