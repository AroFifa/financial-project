import { additional_col, header } from "./comp_class";

export interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
  submenu?: AppPage[];
}

export interface FicheContainerProps {
    object?: object;
    toshow?:any[];
    info?:object;
    img?:String;
    additional_column?: additional_col[];


}


export interface CardContainerProps {
    header: header[];
    data: object[];
    obj?: object;
    additional_column?: additional_col[];
    size?: string;
  }


  export interface selectData {
    label: string;
    value: string;
  }