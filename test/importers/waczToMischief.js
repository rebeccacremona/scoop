import test from 'node:test';
import assert from 'node:assert/strict';
import { valueOf, defaultTestCaptureOptions } from '../utils.js';

import { v4 as uuidv4 } from "uuid";
import { writeFile, rm } from "fs/promises";

import { TMP_DIR, Mischief } from '../../Mischief.js'

test('roundtrip should produce identical mischief', async (_t) => {
  const fpath = `${TMP_DIR}${uuidv4()}.wacz`
  const capture = new Mischief('https://example.com', defaultTestCaptureOptions);
  await capture.capture();
  const wacz = await capture.toWacz();

  let reconstructedCapture;
  try {
    await writeFile(fpath, Buffer.from(wacz));
    reconstructedCapture = await Mischief.fromWacz(fpath);
  }
  finally {
    await rm(fpath, {force: true});
  }

  assert.deepEqual(valueOf(reconstructedCapture), valueOf(capture));
})
