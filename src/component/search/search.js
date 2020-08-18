import React from 'react';
import MaterialTable from 'material-table';

export default function MaterialTableDemo() {
  const [state, setState] = React.useState({
    columns: [
      { title: 'Name', field: 'name' },
    ],
    data: [
      { name: 'تهران',id:'tehran' },
      { name: 'کرج',id :'karj' },
      { name: 'شیراز',id :'shiraz' },
      { name: 'مشهد',id :'mashad' },
    ],
  });

  return (
    <MaterialTable
      title="جستجو شهر"
      columns={state.columns}
      data={state.data}
      editable={{
        onRowAdd: (newData) =>
          new Promise((resolve) => {
            setTimeout(() => {
              resolve();
              setState((prevState) => {
                const data = [...prevState.data];
                data.push(newData);
                return { ...prevState, data };
              });
            }, 600);
          }),

      }}
    />
  );
}