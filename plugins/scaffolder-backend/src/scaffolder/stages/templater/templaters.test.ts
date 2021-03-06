/*
 * Copyright 2020 Spotify AB
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
import { Templaters } from '.';
import { CookieCutter } from './cookiecutter';

describe('Templaters', () => {
  it('should throw an error when the templater is not registered', () => {
    const templaters = new Templaters();

    expect(() => templaters.get('cookiecutter')).toThrow(
      expect.objectContaining({
        message: 'No templater registered for template: "cookiecutter"',
      }),
    );
  });
  it('should return the correct templater when the templater matches', () => {
    const templaters = new Templaters();
    const templater = new CookieCutter();

    templaters.register('cookiecutter', templater);

    expect(templaters.get('cookiecutter')).toBe(templater);
  });
});
