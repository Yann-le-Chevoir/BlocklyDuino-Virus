goog.provide('Blockly.Arduino.virus');

goog.require('Blockly.Arduino');

Blockly.Arduino.virus_distance_trig = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_output_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', OUTPUT);';
  var code = 'digitalWrite(' + dropdown_pin+ ', HIGH);\n'+  'delayMicroseconds(10);\n' + 'digitalWrite(' + dropdown_pin+ ', LOW);\n';
  return code;
};

Blockly.Arduino.virus_distance_echo = function() {
  var dropdown_pin = this.getFieldValue('PIN');
  Blockly.Arduino.setups_['setup_input_' + dropdown_pin] = 'pinMode(' + dropdown_pin + ', INPUT);';
  var code = 'pulseIn(' + dropdown_pin + ', HIGH)*0.1715';
  return [code, Blockly.Arduino.ORDER_ATOMIC];
};