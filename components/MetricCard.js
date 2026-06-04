import { View, Text, StyleSheet } from "react-native";

export default function MetricCard({icon,title,value}) {
    return(
        <View style={styles.card}>
            <Text style={styles.icon}>
                {icon}
            </Text>

            <Text style={styles.title}>
                {title}
            </Text>

            <Text style={styles.value}>
                {value}
            </Text>
        </View>
    )
}

const styles=StyleSheet.create({

card:{
    backgroundColor:"#fff",
    padding:20,
    borderRadius:15,
    marginVertical:10
},

icon:{
    fontSize:30
},

title:{
    fontSize:16
},

value:{
    fontSize:24,
    fontWeight:"bold"
}

})