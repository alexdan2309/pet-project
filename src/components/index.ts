// реэкспорт:
export * from "./PizzaBlock/Skeleton";
export * from "./PizzaBlock";
export * from "./Header";
export * from "./Categories";
export * from "./CartItem";
export * from "./CartEmpty";
export * from "./Search";
export * from "./Pagination";
export * from "./NotFoundBlock";
export * from "./Sort";
export * from "./Search";

// вариант ниже похож на используемый, но подгружает все компоненты, а нетолько
// те, которые вытаскивают из импорта.
//
// import Skeleton from "./PizzaBlock/Skeleton";
// import PizzaBlock from "./PizzaBlock";
// import Header from "./Header";
// import Categories from "./Categories";
// import CartItemBlock from "./CartItem";
// import CartEmpty from "./CartEmpty";
// import Search from "./Search";
// import Pagination from "./Pagination";
// import NotFoundBlock from "./NotFoundBlock";
// import Sort from "./Sort";

// export {
//   Skeleton,
//   PizzaBlock,
//   Header,
//   Categories,
//   CartItemBlock,
//   CartEmpty,
//   Search,
//   Pagination,
//   NotFoundBlock,
//   Sort,
// };
