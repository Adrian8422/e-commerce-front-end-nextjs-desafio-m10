import { ContainerCategories } from "./styled";

export function CategoriesUi({ categories, event }: any) {
  return (
    <ContainerCategories>
      {categories?.map((item: any) => (
        <a onClick={event} id={item} key={item[0]}>
          {item}
        </a>
      ))}
    </ContainerCategories>
  );
}
