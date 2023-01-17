import styled from "styled-components";
import { Search } from "ui/icons";
import { Tiny } from "ui/texts";

export const Input = styled.input`
  font-size: 15px;
  width: 300px;
  height: 30px;
  border-radius: var(--border-radius);
  border: transparent;
`;
export const InputSearchForm = styled(Input)`
  font-size: 15px;
  height: 30px;
  border-radius: 4px 0px 0px 4px;
  border: transparent;
  width: 100%;
`;
export const Label = styled(Tiny)`
  display: flex;
  flex-direction: column;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LabelSearchForm = styled.label`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export function TextField({ label, placeholder, name, defaultValue }: any) {
  return (
    <label>
      <Label>
        {label}
        <Input
          name={name}
          placeholder={placeholder}
          defaultValue={defaultValue}
        />
      </Label>
    </label>
  );
}

export const ButtonSearch = styled.button`
  border-radius: 0px 4px 4px 0px;
  border: transparent;
  display: flex;
  align-items: center;
  height: 30px;
  flex-direction: column;
  justify-content: center;
  color: #808080de;
`;
export function FormSearchQuery({ placeholder, name, event }: any) {
  return (
    <form
      style={{ maxWidth: "474px", width: "100%", padding: "10px" }}
      onSubmit={event}
    >
      <LabelSearchForm>
        <InputSearchForm name={name} placeholder={placeholder} />
        <ButtonSearch style={{ border: "transparent" }}>
          <Search />
        </ButtonSearch>
      </LabelSearchForm>
    </form>
  );
}
