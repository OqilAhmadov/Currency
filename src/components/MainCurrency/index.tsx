import React, { useEffect, useState } from "react";
import Axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import DragHandleIcon from "@mui/icons-material/DragHandle";
import { green } from "@mui/material/colors";
import { AddCurrencies, RemoveCurrencies } from "../../redux/actions"
import Currency from "../Currency";

import { addCurrency, removeCurrency } from "../../store/todoSlice";

import {
  Wrapper,
  LeftSide,
  RightSide,
  Title,
  SelectBox1,
  SelectBox2,
  AddCurrency,
  ContainerCurrency,
  InputCurrency,
  ButtonConverter,
  ConvertedCurrency,
  SelectRow,
  Result
} from "./MainCurrency.style";

const MainCurrency = () => {
  const dispatch = useDispatch();
  const [addSelectFrom, setSelectFrom] = useState([Currency]);
  const [addSelectTo, setSelectTo] = useState([Currency]);
  const [info, setInfo] = useState<any[]>([]);
  const [input, setInput] = useState<any>(0);
  const [from, setFrom] = useState<any>("usd");
  const [to, setTo] = useState<any>("inr");
  const [options, setOptions] = useState<any>([]);
  const [output, setOutput] = useState<any>(0);

  const [text, setText] = useState<any>([]);

  const curr = useSelector((state: any) => state.CurrencyReducer.data);
  console.log(curr);

  const addConverter = () => {
   dispatch<any>(AddCurrencies(text));
   setText('');

  }

  const removeCurrency = () => {
    dispatch<any>( RemoveCurrencies(text) );
    setText('');
    
  }

  useEffect(() => {
    Axios.get(
      `https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${from}.json`,
    ).then((res) => {
      setInfo(res.data[from]);
    });
  }, [from]);

  useEffect(() => {
    setOptions(Object.keys(info));
    convert();
  }, [info]);

  function convert() {
    var rate = info[to];
    setOutput(input * rate);
  }

  const AddSelectFrom = () => {
    const select = [...addSelectFrom, []];
    setSelectFrom(select as any);
  };

  const AddSelectTo = () => {
    const select = [...addSelectTo, []];
    setSelectTo(select as any);
  };

  const handleDeleteTo = (i: any) => {
    const delSelectTo = [...addSelectTo]; 
    delSelectTo.splice(i, 1);
    setSelectTo(delSelectTo as any);
  }

  const handleDeleteFrom = (i: any) => {
    const delSelectFrom = [...addSelectFrom];
    delSelectFrom.splice(i, 1);
    setSelectFrom(delSelectFrom as any);
  }



  return (
    <ContainerCurrency maxWidth="lg">
      <Title>Currency Converter</Title>
      <InputCurrency type='number' placeholder="Enter the amount" onChange={(e: any) => setInput(e.target.value)} />
      <Wrapper>
        <LeftSide>
          <Title>From</Title>
          <SelectRow >
          <SelectBox1>
           
            {
              addSelectFrom.map((item: any) => {
                return (
                  <Currency
                        key={item.id}
                        // sum={input}
                        option={item.data}
                        currencyValue={from}
                        Currencies={options}
                        onCurrencyChange={setFrom}
                        handleDelete={handleDeleteFrom}  
                          />
                );
              })
             }

          </SelectBox1>
                    <DragHandleIcon />
          </SelectRow>
          <AddCurrency
            onClick={AddSelectFrom}
            sx={{ color: green[500], fontSize: 40, marginTop: 1 }}
          />
        </LeftSide>

        <RightSide>
          <Title>To</Title>
          <SelectBox2>
            {addSelectTo.map((item: any, index: number) => {
              return (
                <Currency
                      key={index}
                      // sum={input}
                      option={item}
                      currencyValue={to}
                      Currencies={options}
                      onCurrencyChange={setTo}
                      handleDelete={handleDeleteTo}  />
              );
            })}
            <AddCurrency onClick={AddSelectTo} sx={{ color: green[500], fontSize: 40 }} />
          </SelectBox2>
        </RightSide>
      </Wrapper>
      <Result>
      <ButtonConverter  onClick={() => {
            convert();
          }} variant="contained">Convert</ButtonConverter>
           <h2>Converted Amount:</h2>
        <ConvertedCurrency>{input + " " + from + " = " + output.toFixed(2) + " " + to}</ConvertedCurrency>
      </Result>
    </ContainerCurrency>
  );
};

export default MainCurrency;
