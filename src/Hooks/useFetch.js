import React, { useEffect, useState } from "react";
import axios from "axios";
import { ActivityIndicator } from "react-native-paper";

export default function useFetch(URL, id) {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  async function fetchData() {
    try {
      console.log(page);
      setLoading(true);
      const res = !!id ? await axios.get(`${URL}/${id}`) :  await axios.get(`${URL}?page=${page}`);
      console.log(`${URL}?page=${page}`);
      const newData = res.data; // API'den gelen veriler
      console.log(page, "PAGE Control");
      if (page === 0) {
        !!id ? setData(newData): setData(newData.results);
      } else {
        !!id ? setData(newData): setData((data) => [...data, ...newData.results]);
      }
      console.log(page, "PAGE");
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  //FlatList için onEndReached işlevi
  const handleLoadMore = () => {
    if (!loading && !error) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  // FlatList'in altına eklenen yüklenme göstergesi
  const renderFooter = () => {
    return loading ? <ActivityIndicator size="large" style={{marginBottom:15}}/> : null;
  };

  useEffect(() => {
    if (page === 0) {
      setData([]); // Sayfa sıfırlanıyorsa, veriyi temizle
    }
    fetchData();
  }, [page]);

  return { data, loading, error, handleLoadMore, renderFooter };
}
