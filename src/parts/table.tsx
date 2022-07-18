import { useRef, useState } from 'react'
import { Button, Input, Space, Table } from 'antd';
import venues from '../json/maps.json'
import {
  SearchOutlined
} from '@ant-design/icons';
import Highlighter from 'react-highlight-words';
import type { InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import type { ColumnsType, ColumnType } from 'antd/es/table';
import { useNavigate } from "react-router-dom";

interface DataType {
  key: number;
  id: number;
  lat: number;
  lon: number;
  category: string; 
  name: string; 
  created_on: number; 
  geolocation_degrees: string;
  promoted?: boolean;
}

export default function NewTable() {
  type DataIndex = keyof DataType;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchText, setSearchText] = useState<string>('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const [searchedColumn, setSearchedColumn] = useState('');
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const searchInput = useRef<InputRef>(null);

  const handleSearch = (
    selectedKeys: string[],
    confirm: (param?: FilterConfirmProps) => void,
    dataIndex: DataIndex,
  ) => {
    confirm();
    setSearchText(selectedKeys[0]);
    setSearchedColumn(dataIndex);
  };

  const handleReset = (clearFilters: () => void) => {
    clearFilters();
    setSearchText('');
  };

  const getColumnSearchProps = (dataIndex: DataIndex): ColumnType<DataType> => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={searchInput}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
          style={{ marginBottom: 8, display: 'block' }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => clearFilters && handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
          <Button
            type="link"
            size="small"
            onClick={() => {
              confirm({ closeDropdown: false });
              setSearchText((selectedKeys as string[])[0]);
              setSearchedColumn(dataIndex);
            }}
          >
            Filter
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered: boolean) => (
      <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
    ),
    onFilter: (value, record) => {
      if (record[dataIndex]?.toString().toLowerCase().includes(value.toString().toLowerCase())) {
        return true;
      } else return false;
    },
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text ? text.toString() : ''}
        />
      ) : (
        text
      ),
  });


  const maps: DataType[] = venues.venues.map((map) => {
    let new_map: DataType = {
      key: map.id,
      id: map.id,
      lat: map.lat,
      lon: map.lon,
      category: map.category, 
      name: map.name,
      created_on: map.created_on, 
      geolocation_degrees: map.geolocation_degrees,
    }
    return new_map;
  });

  const columns: ColumnsType<DataType> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: 'Lat',
      dataIndex: 'lat',
      key: 'lat',
      ...getColumnSearchProps('lat'),
      sorter: (a, b) => a.lat - b.lat,
    },
    {
      title: 'Long',
      dataIndex: 'lon',
      key: 'lon',
      ...getColumnSearchProps('lon'),
      sorter: (a, b) => a.lon - b.lon,
    },
    {
        title: 'Category',
        dataIndex: 'category',
        key: 'category',
        ...getColumnSearchProps('category'),
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        ...getColumnSearchProps('name'),
    },
  ];

  let usenavigate = useNavigate(); 
  const routeChange = (id: number) =>{ 
    let path = `${id}`
    usenavigate(path);
  }

  return (
    <div className="w-full px-4 py-2 bg-gray-200 lg:w-full">
        <div className="container mx-auto mt-12">
            <Table 
              onRow={(record, rowIndex) => {
                return {
                  onClick: event => {
                    routeChange(record.id);
                  },
                }
              }}
              dataSource={maps} 
              columns={columns} 
            />
        </div>
    </div>
  )
}
