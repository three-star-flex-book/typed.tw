import React from "react";

import { Style } from "style";

interface Props {
  title: string
}

const Button = () => (
  <div className={Style().w12().h12().bg4().roundedFull().$()} />
);

const Buttons = () => (
  <div className={Style().flex().$()}>
    <Button /><div className={Style().w8().$()} />
    <Button /><div className={Style().w8().$()} />
    <Button />
  </div>
);

const Title: React.FC<Props> = (props) => (
  <div className={[
    Style().hFull().flex().itemsCenter().justifyCenter().$(),
    Style().text5().font500().leading16().$(),
  ].join("")}>
    <span>{props.title}</span>
  </div>
);

export const Header: React.FC<Props> = (props) => (
  <div>
    <div className={Style().relative().p16().$()}>
      <Buttons />
      <div className={Style().absolute().inset0().$()}>
        <Title title={props.title} />
      </div>
    </div>
  </div>
)
