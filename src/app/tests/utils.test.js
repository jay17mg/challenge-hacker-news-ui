import { formatTime, sortStories } from '../components/utils'
import data from './mock-data.json'

describe('utils.js', () => {
    var date = new Date();
    it('sorts mock data by latest', () => {
        sortStories('1', data)
        expect(data[0].title).toBe('newest')
    })
    it('sorts mock data by oldest', () => {
        sortStories('2', data)
        expect(data[0].title).toBe('oldest')
    })
    it('sorts mock data by least votes', () => {
        sortStories('3', data)
        expect(data[0].title).toBe('least votes')
    })
    it('sorts mock data by most votes', () => {
        sortStories('4', data)
        expect(data[0].title).toBe('most votes')
    })
    it('format time returns few seconds ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 30;
        expect(formatTime(time)).toBe('few seconds ago')
    })
    it('format time returns 1 minute ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 60;
        expect(formatTime(time)).toBe('1 minute ago')
    })
    it('format time returns 2 minute ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 120;
        expect(formatTime(time)).toBe('2 minutes ago')
    })
    it('format time returns 1 hour ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 3600;
        expect(formatTime(time)).toBe('1 hour ago')
    })
    it('format time returns 2 hours ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 7200;
        expect(formatTime(time)).toBe('2 hours ago')
    })
    it('format time returns 1 day ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 86400;
        expect(formatTime(time)).toBe('1 day ago')
    })
    it('format time returns 2 day ago', () => {
        var time = Math.floor(date.getTime() / 1000) - 172800;
        expect(formatTime(time)).toBe('2 days ago')
    })
})