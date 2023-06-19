import { StyleSheet, Text, View, Image } from 'react-native';
import React from 'react'

const ProfileScreen = () => {
    return (
        <View style={styles.container}>
            <Image
                style={styles.avatar}
                source={{
                    uri: 'https://media.licdn.com/dms/image/D5603AQHMN0y1jQBVNA/profile-displayphoto-shrink_800_800/0/1674974357535?e=2147483647&v=beta&t=-Ept6_kA8_m1qAvl-H_tov0fXiqDHQFw4kvLPY6bjg4',
                }}
            />
            <Text style={styles.name}>John Ortner</Text>
            <Text style={styles.email}>john@firstcontact.co</Text>
            <View style={styles.statsContainer}>
                <View style={styles.stat}>
                    <Text style={styles.statTitle}>Followers</Text>
                    <Text style={styles.statValue}>150</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statTitle}>Following</Text>
                    <Text style={styles.statValue}>200</Text>
                </View>
                <View style={styles.stat}>
                    <Text style={styles.statTitle}>Posts</Text>
                    <Text style={styles.statValue}>25</Text>
                </View>
            </View>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginBottom: 20,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    email: {
        fontSize: 18,
        marginBottom: 10,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: '100%',
        marginTop: 30,
    },
    stat: {
        alignItems: 'center',
    },
    statTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    statValue: {
        fontSize: 16,
    },
});
export default ProfileScreen;