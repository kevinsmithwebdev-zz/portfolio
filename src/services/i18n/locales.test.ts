import enData from './locales/en';
import esData from './locales/es';

// TODO: improve - recursively go through and check all prop names and array lengths.
// Compare string types.

function hasSameProps(obj1: any, obj2: any): boolean {
  const obj1Props = Object.keys( obj1 );
  const obj2Props = Object.keys( obj2 );

  if ( obj1Props.length === obj2Props.length ) {
    return obj1Props.every( function( prop ) {
      return obj2Props.indexOf( prop ) >= 0;
    });
  }

  return false;
}

describe('i18n', () => {
  describe('the language files', () => {
    it('should have the same shape', () => {
      expect(hasSameProps(enData, esData)).toBe(true);
    });
  });
});
