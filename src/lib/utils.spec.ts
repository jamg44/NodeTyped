import * as utils from './utils';

describe('utils', () => {

  /*beforeEach(function () {
    // before each utils test
  });*/

  describe('add', () => {
    it('should add 5 and 6', () => {
      expect(utils.add(5, 6)).toBe(11);
    });
  });

  describe('findConfigFileSync', () => {
    /*beforeEach(function () {
      // before each function test
    });*/

    it('should find package.json path', () => {
      expect(utils.findConfigFileSync('package.json')).not.toBeUndefined();

    });
  });

  // demonstrates use of spies to intercept and test method calls
  /*
  it('tells the current song if the user has made it a favorite', function() {
    spyOn(song, 'persistFavoriteStatus');

    player.play(song);
    player.makeFavorite();

    expect(song.persistFavoriteStatus).toHaveBeenCalledWith(true);
  });

  //demonstrates use of expected exceptions
  describe('#resume', function() {
    it('should throw an exception if song is already playing', function() {
      player.play(song);

      expect(function() {
        player.resume();
      }).toThrowError('song is already playing');
    });
  });*/

});
