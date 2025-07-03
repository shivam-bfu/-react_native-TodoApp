import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useDispatch, useSelector } from 'react-redux';
import {
  addtasks,
  clearAllTask,
  clearSelectedTask,
  clearTask,
  selectTasks,
  setTasksFromTheASyncStorage,
} from '../redux/slice';
import I18n from '../utils/i18n';
const TodoApp = () => {
  const [locale, setLocale] = useState('en')

  const dispatch = useDispatch();
  const tasks = useSelector(state => state.task.tasks);
  const selectedTasks = useSelector(state => state.task.selectedTasks);

  const [taskTitle, setTaskTitle] = useState('');
  const [check, setCheck] = useState(false);

  const getData = async () => {
    try {
      const allTasks = await AsyncStorage.getItem('tasks');
      if (allTasks !== null) {
        dispatch(setTasksFromTheASyncStorage(JSON.parse(allTasks)));
      }
    } catch (e) {
      console.log(e);
    }
  };

  const saveTasks = async () => {
    try {
      await AsyncStorage.setItem('tasks', JSON.stringify(tasks));
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    saveTasks();
  }, [tasks]);

  const handleAddTask = () => {
    if (!taskTitle.trim()) {
      setCheck(true);
    } else {
      dispatch(addtasks(taskTitle)); // use your import name
      setTaskTitle('');
      setCheck(false);
    }
  };

  const renderItem = ({ item }) => (
    <View style={{ marginTop: 20, marginLeft: 32 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "80%", marginTop: 20 }}>
        <TouchableOpacity
          onLongPress={() => dispatch(selectTasks(item.id))}
          onPress={() => dispatch(selectTasks(item.id))}
          style={{ backgroundColor: selectedTasks.includes(item.id) ? 'blue' : 'gray', padding: 10, width: '90%', borderRadius: 5 }}>
          <Text style={{ fontSize: 18, color: 'white', fontWeight: 'bold', letterSpacing: 1 }}>{item.title}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch(clearTask(item.id))} style={{ paddingLeft: 40 }}>
          <Text style={{ marginRight: 35 }}>❌</Text>
        </TouchableOpacity>
      </View>
    </View>
  );

  const changeLang = (newLang)=>{

    I18n.locale=newLang
    setLocale(newLang)

  }

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 30, fontWeight: 'bold', letterSpacing: 2 }}>
        {I18n.t('TODO')} <Text style={{ color: 'red' }}>{I18n.t('LIST')}</Text>
      </Text>
        <Picker
          style={{ height: 50, width: 90,  }}
          selectedValue={locale}
          onValueChange={(itemvalue, itemIndex) =>
            {
                changeLang(itemvalue)
            }
          }
        
        >


          <Picker.Item label='En' value='en'   />
          <Picker.Item label='Hi' value='hi'   />
        </Picker>

      <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "80%", marginTop: 20 }}>


        <TextInput
          onChangeText={text => {
            setTaskTitle(text);
            setCheck(false);
          }}
          onSubmitEditing={handleAddTask}
      placeholder={`${I18n.t("Enter")} ${I18n.t("Tasks")}`}

          value={taskTitle}
          style={{ borderWidth: 1, width: "70%", borderRadius: 5, fontSize: 19 }}
        />
        <TouchableOpacity onPress={handleAddTask} style={{ padding: 10, borderRadius: 5, backgroundColor: 'limegreen' }}>
          <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>{I18n.t('Update')}</Text>
        </TouchableOpacity>
      </View>
      {check ? <Text style={{ color: 'red', fontSize: 16, fontWeight: 'bold', letterSpacing: 1 }}>{I18n.t('Please')} {I18n.t('Enter')} {I18n.t('Task')}</Text> : null}

      <View style={{ marginTop: 20, marginLeft: 10, flex: 1, width: '100%' }}>
        <FlatList
          data={tasks}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
        />
      </View>

      {
        selectedTasks.length === 0 ? (
          <View style={{ marginTop: 20, marginLeft: 10, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "80%", marginTop: 20 }}>
              <Text style={{ fontWeight: 'bold', letterSpacing: 1, width: '70%' }}>{I18n.t('You')} {I18n.t('Have')} {tasks.length} {I18n.t('Pending')} {I18n.t('Tasks')}</Text>
              <TouchableOpacity onPress={() => dispatch(clearAllTask())} style={{ padding: 10, borderRadius: 5, backgroundColor: 'red' }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>{I18n.t('Clear')} {I18n.t('All')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View style={{ marginTop: 20, marginLeft: 10, marginBottom: 20 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', width: "80%", marginTop: 20 }}>
              <TouchableOpacity onPress={() => dispatch(clearSelectedTask())} style={{ padding: 10, borderRadius: 5, backgroundColor: 'red' }}>
                <Text style={{ fontSize: 16, color: 'white', fontWeight: 'bold', letterSpacing: 2 }}>{I18n.t('Clear')} {I18n.t('Selected')} {I18n.t('Tasks')}</Text>
              </TouchableOpacity>
            </View>
          </View>
        )
      }
    </View>
  );
};

const styles = {
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
    marginTop: 50,
  }
};

export default TodoApp;
