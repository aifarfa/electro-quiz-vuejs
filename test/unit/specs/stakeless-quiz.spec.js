import { getTotalResistance, getResistanceList, min, max } from 'src/modules/stakeless-quiz'

describe('stakeless-quiz', () => {
  describe('Given Rn = [5, 5, 5, 5, 10, 10, 50, 5, 10]', () => {
    const sampleList = [5, 5, 5, 5, 10, 10, 50, 5, 10]

    it('sum of resistance: 5', () => {
      const r = getTotalResistance(sampleList, 5)
      expect(r).to.eq(6.12)
    })

    it('sum of resistance: 10', () => {
      const r = getTotalResistance(sampleList, 10)
      expect(r).to.eq(11.22)
    })

    it('sum of resistance: 50', () => {
      const r = getTotalResistance(sampleList, 50)
      expect(r).to.eq(51.3)
    })

    it('find min R', () => {
      const minR = min(getResistanceList(sampleList))
      expect(minR).to.eq(6.12)
    })

    it('find max R', () => {
      const minR = max(getResistanceList(sampleList))
      expect(minR).to.eq(51.3)
    })
  })

  describe('Given Rn = [10, 10, 50, 5]', () => {
    const sampleList = [10, 10, 50, 5]

    it('sum of resistance: 5', () => {
      const r = getTotalResistance(sampleList, 5)
      expect(r).to.eq(5.22)
    })

    it('sum of resistance: 10', () => {
      const r = getTotalResistance(sampleList, 10)
      expect(r).to.eq(10.32)
    })

    it('sum of resistance: 50', () => {
      const r = getTotalResistance(sampleList, 50)
      expect(r).to.eq(50.4)
    })

    it('find min R', () => {
      const minR = min(getResistanceList(sampleList))
      expect(minR).to.eq(5.22)
    })

    it('find max R', () => {
      const minR = max(getResistanceList(sampleList))
      expect(minR).to.eq(50.4)
    })
  })
})
