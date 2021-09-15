interface Fruit {
  name: string,
  id: string
}

export type { Fruit }

interface Props {
  [key: string]: any
}

const SelectFruits: React.FC<Props> = (props) => {
  return (
    <div className="App">
      <select name="" id="">
        {
          props.fruits.map((item: Fruit) => {
            return <option value={item.id} key={item.id}>{item.name}</option>
          })
        }
      </select>
    </div>
  );
}

export default SelectFruits;