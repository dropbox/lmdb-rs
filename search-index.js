var searchIndex = {};
searchIndex['lmdb_rs'] = {"items":[[0,"","lmdb_rs","",null,null],[11,"clone","ffi","",0,{"inputs":[{"name":"mdb_val"}],"output":{"name":"mdb_val"}}],[11,"clone","","",1,{"inputs":[{"name":"mdb_stat"}],"output":{"name":"mdb_stat"}}],[11,"eq","","",2,{"inputs":[{"name":"mdb_cursor_op"},{"name":"mdb_cursor_op"}],"output":{"name":"bool"}}],[11,"ne","","",2,{"inputs":[{"name":"mdb_cursor_op"},{"name":"mdb_cursor_op"}],"output":{"name":"bool"}}],[11,"clone","","",2,{"inputs":[{"name":"mdb_cursor_op"}],"output":{"name":"mdb_cursor_op"}}],[11,"fmt","","",0,{"inputs":[{"name":"mdb_val"},{"name":"formatter"}],"output":{"name":"result"}}],[6,"mdb_filehandle_t","lmdb_rs","",null,null],[3,"MDB_stat","","",null,null],[12,"ms_psize","","",1,null],[12,"ms_depth","","",1,null],[12,"ms_branch_pages","","",1,null],[12,"ms_leaf_pages","","",1,null],[12,"ms_overflow_pages","","",1,null],[12,"ms_entries","","",1,null],[3,"MDB_envinfo","","",null,null],[12,"me_mapaddr","","",3,null],[12,"me_mapsize","","",3,null],[12,"me_last_pgno","","",3,null],[12,"me_last_txnid","","",3,null],[12,"me_maxreaders","","",3,null],[12,"me_numreaders","","",3,null],[0,"core","","High level wrapper of LMDB APIs",null,null],[3,"EnvFlags","lmdb_rs::core","A set of environment flags which could be changed after opening",null,null],[3,"EnvCreateFlags","","A set of all environment flags",null,null],[3,"DbFlags","","A set of database flags",null,null],[3,"Database","","Database",null,null],[3,"EnvBuilder","","Constructs environment with settigs which couldn't be\nchanged after opening. By default it tries to create\ncorresponding dir if it doesn't exist, use `autocreate_dir()`\nto override that behavior",null,null],[3,"Environment","","Represents LMDB Environment. Should be opened using `EnvBuilder`",null,null],[3,"DbHandle","","A handle to a database",null,null],[3,"Transaction","","",null,null],[3,"ReadonlyTransaction","","",null,null],[3,"Cursor","","",null,null],[3,"CursorItemAccessor","","",null,null],[3,"CursorValue","","",null,null],[3,"CursorIterator","","",null,null],[3,"CursorKeyRangeIter","","",null,null],[3,"CursorFromKeyIter","","",null,null],[3,"CursorToKeyIter","","",null,null],[3,"CursorIter","","",null,null],[3,"CursorItemIter","","",null,null],[3,"MdbValue","","",null,null],[4,"MdbError","","MdbError wraps information about LMDB error",null,null],[13,"NotFound","","",4,null],[13,"KeyExists","","",4,null],[13,"TxnFull","","",4,null],[13,"CursorFull","","",4,null],[13,"PageFull","","",4,null],[13,"Corrupted","","",4,null],[13,"Panic","","",4,null],[13,"InvalidPath","","",4,null],[13,"StateError","","",4,null],[13,"CacheError","","",4,null],[13,"Other","","",4,null],[6,"MdbResult","","",null,null],[17,"EnvNoSync","","Don't flush system buffers to disk when committing a\ntransaction. This optimization means a system crash can\ncorrupt the database or lose the last transactions if buffers\nare not yet flushed to disk. The risk is governed by how\noften the system flushes dirty buffers to disk and how often\nmdb_env_sync() is called. However, if the filesystem\npreserves write order and the MDB_WRITEMAP flag is not used,\ntransactions exhibit ACI (atomicity, consistency, isolation)\nproperties and only lose D (durability). I.e. database\nintegrity is maintained, but a system crash may undo the\nfinal transactions. Note that (MDB_NOSYNC | MDB_WRITEMAP)\nleaves the system with no hint for when to write transactions\nto disk, unless mdb_env_sync() is called. (MDB_MAPASYNC |\nMDB_WRITEMAP) may be preferable. This flag may be changed at\nany time using mdb_env_set_flags().",null,null],[17,"EnvNoMetaSync","","Flush system buffers to disk only once per transaction,\nomit the metadata flush. Defer that until the system flushes\nfiles to disk, or next non-MDB_RDONLY commit or\nmdb_env_sync(). This optimization maintains database\nintegrity, but a system crash may undo the last committed\ntransaction. I.e. it preserves the ACI (atomicity,\nconsistency, isolation) but not D (durability) database\nproperty. This flag may be changed at any time using\nmdb_env_set_flags().",null,null],[17,"EnvMapAsync","","When using MDB_WRITEMAP, use asynchronous flushes to\ndisk. As with MDB_NOSYNC, a system crash can then corrupt the\ndatabase or lose the last transactions. Calling\nmdb_env_sync() ensures on-disk database integrity until next\ncommit. This flag may be changed at any time using\nmdb_env_set_flags().",null,null],[17,"EnvNoMemInit","","Don't initialize malloc'd memory before writing to\nunused spaces in the data file. By default, memory for pages\nwritten to the data file is obtained using malloc. While\nthese pages may be reused in subsequent transactions, freshly\nmalloc'd pages will be initialized to zeroes before use. This\navoids persisting leftover data from other code (that used\nthe heap and subsequently freed the memory) into the data\nfile. Note that many other system libraries may allocate and\nfree memory from the heap for arbitrary uses. E.g., stdio may\nuse the heap for file I/O buffers. This initialization step\nhas a modest performance cost so some applications may want\nto disable it using this flag. This option can be a problem\nfor applications which handle sensitive data like passwords,\nand it makes memory checkers like Valgrind noisy. This flag\nis not needed with MDB_WRITEMAP, which writes directly to the\nmmap instead of using malloc for pages. The initialization is\nalso skipped if MDB_RESERVE is used; the caller is expected\nto overwrite all of the memory that was reserved in that\ncase. This flag may be changed at any time using\nmdb_env_set_flags().",null,null],[17,"EnvCreateFixedMap","","Use a fixed address for the mmap region. This flag must be\n specified when creating the environment, and is stored persistently\n in the environment. If successful, the memory map will always reside\n at the same virtual address and pointers used to reference data items\n in the database will be constant across multiple invocations. This \noption may not always work, depending on how the operating system has\n allocated memory to shared libraries and other uses. The feature is highly experimental.",null,null],[17,"EnvCreateNoSubDir","","By default, LMDB creates its environment in a directory whose\npathname is given in path, and creates its data and lock files\nunder that directory. With this option, path is used as-is\nfor the database main data file. The database lock file is\nthe path with \"-lock\" appended.",null,null],[17,"EnvCreateNoSync","","Don't flush system buffers to disk when committing a\ntransaction. This optimization means a system crash can corrupt\nthe database or lose the last transactions if buffers are not\nyet flushed to disk. The risk is governed by how often the\nsystem flushes dirty buffers to disk and how often\nmdb_env_sync() is called. However, if the filesystem preserves\nwrite order and the MDB_WRITEMAP flag is not used, transactions\nexhibit ACI (atomicity, consistency, isolation) properties and\nonly lose D (durability). I.e. database integrity is\nmaintained, but a system crash may undo the final\ntransactions. Note that (MDB_NOSYNC | MDB_WRITEMAP) leaves\nthe system with no hint for when to write transactions to\ndisk, unless mdb_env_sync() is called.\n(MDB_MAPASYNC | MDB_WRITEMAP) may be preferable. This flag\nmay be changed at any time using mdb_env_set_flags().",null,null],[17,"EnvCreateReadOnly","","Open the environment in read-only mode. No write operations\nwill be allowed. LMDB will still modify the lock file - except\non read-only filesystems, where LMDB does not use locks.",null,null],[17,"EnvCreateNoMetaSync","","Flush system buffers to disk only once per transaction,\nomit the metadata flush. Defer that until the system flushes\nfiles to disk, or next non-MDB_RDONLY commit or mdb_env_sync().\nThis optimization maintains database integrity, but a system\ncrash may undo the last committed transaction. I.e. it\npreserves the ACI (atomicity, consistency, isolation) but\nnot D (durability) database property. This flag may be changed\nat any time using mdb_env_set_flags().",null,null],[17,"EnvCreateWriteMap","","Use a writeable memory map unless MDB_RDONLY is set. This is\nfaster and uses fewer mallocs, but loses protection from\napplication bugs like wild pointer writes and other bad updates\ninto the database. Incompatible with nested\ntransactions. Processes with and without MDB_WRITEMAP on the\nsame environment do not cooperate well.",null,null],[17,"EnvCreataMapAsync","","When using MDB_WRITEMAP, use asynchronous flushes to disk. As\nwith MDB_NOSYNC, a system crash can then corrupt the database or\nlose the last transactions. Calling mdb_env_sync() ensures\non-disk database integrity until next commit. This flag may be\nchanged at any time using mdb_env_set_flags().",null,null],[17,"EnvCreateNoTls","","Don't use Thread-Local Storage. Tie reader locktable slots to\nffi::MDB_txn objects instead of to threads. I.e. mdb_txn_reset()\nkeeps the slot reseved for the ffi::MDB_txn object. A thread may\nuse parallel read-only transactions. A read-only transaction may\nspan threads if the user synchronizes its use. Applications that\nmultiplex many user threads over individual OS threads need this\noption. Such an application must also serialize the write\ntransactions in an OS thread, since LMDB's write locking is\nunaware of the user threads.",null,null],[17,"EnvCreateNoLock","","Don't do any locking. If concurrent access is anticipated, the\ncaller must manage all concurrency itself. For proper operation\nthe caller must enforce single-writer semantics, and must ensure\nthat no readers are using old transactions while a writer is\nactive. The simplest approach is to use an exclusive lock so\nthat no readers may be active at all when a writer begins. ",null,null],[17,"EnvCreateNoReadAhead","","Turn off readahead. Most operating systems perform readahead on\nread requests by default. This option turns it off if the OS\nsupports it. Turning it off may help random read performance\nwhen the DB is larger than RAM and system RAM is full. The\noption is not implemented on Windows.",null,null],[17,"EnvCreateNoMemInit","","Don't initialize malloc'd memory before writing to unused spaces\nin the data file. By default, memory for pages written to the\ndata file is obtained using malloc. While these pages may be\nreused in subsequent transactions, freshly malloc'd pages will\nbe initialized to zeroes before use. This avoids persisting\nleftover data from other code (that used the heap and\nsubsequently freed the memory) into the data file. Note that\nmany other system libraries may allocate and free memory from\nthe heap for arbitrary uses. E.g., stdio may use the heap for\nfile I/O buffers. This initialization step has a modest\nperformance cost so some applications may want to disable it\nusing this flag. This option can be a problem for applications\nwhich handle sensitive data like passwords, and it makes memory\ncheckers like Valgrind noisy. This flag is not needed with\nMDB_WRITEMAP, which writes directly to the mmap instead of using\nmalloc for pages. The initialization is also skipped if\nMDB_RESERVE is used; the caller is expected to overwrite all of\nthe memory that was reserved in that case. This flag may be\nchanged at any time using mdb_env_set_flags().",null,null],[17,"DbReverseKey","","Keys are strings to be compared in reverse order, from the\nend of the strings to the beginning. By default, Keys are\ntreated as strings and compared from beginning to end.",null,null],[17,"DbAllowDups","","Duplicate keys may be used in the database. (Or, from another\nperspective, keys may have multiple data items, stored in sorted\norder.) By default keys must be unique and may have only a\nsingle data item.",null,null],[17,"DbIntKey","","Keys are binary integers in native byte order. Setting this\noption requires all keys to be the same size, typically\nsizeof(int) or sizeof(size_t).",null,null],[17,"DbDupFixed","","This flag may only be used in combination with\nffi::MDB_DUPSORT. This option tells the library that the data\nitems for this database are all the same size, which allows\nfurther optimizations in storage and retrieval. When all data\nitems are the same size, the ffi::MDB_GET_MULTIPLE and\nffi::MDB_NEXT_MULTIPLE cursor operations may be used to retrieve\nmultiple items at once.",null,null],[17,"DbAllowIntDups","","This option specifies that duplicate data items are also\nintegers, and should be sorted as such.",null,null],[17,"DbReversedDups","","This option specifies that duplicate data items should be\ncompared as strings in reverse order.",null,null],[17,"DbCreate","","Create the named database if it doesn't exist. This option\nis not allowed in a read-only transaction or a read-only\nenvironment.",null,null],[11,"fmt","","",4,{"inputs":[{"name":"mdberror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"new_with_code","","",4,{"inputs":[{"name":"mdberror"},{"name":"c_int"}],"output":{"name":"mdberror"}}],[11,"fmt","","",4,{"inputs":[{"name":"mdberror"},{"name":"formatter"}],"output":{"name":"result"}}],[11,"description","","",4,{"inputs":[{"name":"mdberror"}],"output":{"name":"str"}}],[11,"hash","","",5,null],[11,"cmp","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"option"}}],[11,"lt","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"le","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"gt","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"ge","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"clone","","",5,{"inputs":[{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"eq","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"ne","","",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",5,{"inputs":[{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"all","","Returns the set containing all flags.",5,{"inputs":[{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",5,{"inputs":[{"name":"envflags"}],"output":{"name":"c_uint"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",5,{"inputs":[{"name":"envflags"},{"name":"c_uint"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",5,{"inputs":[{"name":"envflags"},{"name":"c_uint"}],"output":{"name":"envflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",5,{"inputs":[{"name":"envflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",5,{"inputs":[{"name":"envflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":null}],[11,"bitor","","Returns the union of the two sets of flags.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"bitand","","Returns the intersection between the two sets of flags.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"sub","","Returns the set difference of the two sets of flags.",5,{"inputs":[{"name":"envflags"},{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"not","","Returns the complement of this set of flags.",5,{"inputs":[{"name":"envflags"}],"output":{"name":"envflags"}}],[11,"hash","","",6,null],[11,"cmp","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"option"}}],[11,"lt","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"le","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"gt","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"ge","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"clone","","",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"eq","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"ne","","",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"all","","Returns the set containing all flags.",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"c_uint"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",6,{"inputs":[{"name":"envcreateflags"},{"name":"c_uint"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",6,{"inputs":[{"name":"envcreateflags"},{"name":"c_uint"}],"output":{"name":"envcreateflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":null}],[11,"bitor","","Returns the union of the two sets of flags.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"bitand","","Returns the intersection between the two sets of flags.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"sub","","Returns the set difference of the two sets of flags.",6,{"inputs":[{"name":"envcreateflags"},{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"not","","Returns the complement of this set of flags.",6,{"inputs":[{"name":"envcreateflags"}],"output":{"name":"envcreateflags"}}],[11,"hash","","",7,null],[11,"cmp","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"ordering"}}],[11,"partial_cmp","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"option"}}],[11,"lt","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"le","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"gt","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"ge","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"clone","","",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"eq","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"ne","","",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"empty","","Returns an empty set of flags.",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"all","","Returns the set containing all flags.",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"bits","","Returns the raw value of the flags currently stored.",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"c_uint"}}],[11,"from_bits","","Convert from underlying bit representation, unless that\nrepresentation contains bits that do not correspond to a flag.",7,{"inputs":[{"name":"dbflags"},{"name":"c_uint"}],"output":{"name":"option"}}],[11,"from_bits_truncate","","Convert from underlying bit representation, dropping any bits\nthat do not correspond to flags.",7,{"inputs":[{"name":"dbflags"},{"name":"c_uint"}],"output":{"name":"dbflags"}}],[11,"is_empty","","Returns `true` if no flags are currently stored.",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"is_all","","Returns `true` if all flags are currently set.",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"intersects","","Returns `true` if there are flags common to both `self` and `other`.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"contains","","Returns `true` all of the flags in `other` are contained within `self`.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"bool"}}],[11,"insert","","Inserts the specified flags in-place.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":null}],[11,"remove","","Removes the specified flags in-place.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":null}],[11,"toggle","","Toggles the specified flags in-place.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":null}],[11,"bitor","","Returns the union of the two sets of flags.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"bitxor","","Returns the left flags, but with all the right flags toggled.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"bitand","","Returns the intersection between the two sets of flags.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"sub","","Returns the set difference of the two sets of flags.",7,{"inputs":[{"name":"dbflags"},{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"not","","Returns the complement of this set of flags.",7,{"inputs":[{"name":"dbflags"}],"output":{"name":"dbflags"}}],[11,"stat","","Retrieves current db's statistics.",8,{"inputs":[{"name":"database"}],"output":{"name":"mdbresult"}}],[11,"get","","Retrieves a value by key. In case of DbAllowDups it will be the first value",8,{"inputs":[{"name":"database"},{"name":"tomdbvalue"}],"output":{"name":"mdbresult"}}],[11,"set","","Sets value for key. In case of DbAllowDups it will add a new item",8,{"inputs":[{"name":"database"},{"name":"k"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"insert","","Set value for key. Fails if key already exists, even when duplicates are allowed.",8,{"inputs":[{"name":"database"},{"name":"k"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"del","","Deletes value for key.",8,{"inputs":[{"name":"database"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"del_item","","Should be used only with DbAllowDups. Deletes corresponding (key, value)",8,{"inputs":[{"name":"database"},{"name":"tomdbvalue"},{"name":"tomdbvalue"}],"output":{"name":"mdbresult"}}],[11,"new_cursor","","Returns a new cursor",8,{"inputs":[{"name":"database"}],"output":{"name":"mdbresult"}}],[11,"del_db","","Deletes current db, also moves it out",8,{"inputs":[{"name":"database"}],"output":{"name":"mdbresult"}}],[11,"clear","","Removes all key/values from db",8,{"inputs":[{"name":"database"}],"output":{"name":"mdbresult"}}],[11,"iter","","Returns an iterator for all values in database",8,{"inputs":[{"name":"database"}],"output":{"name":"mdbresult"}}],[11,"keyrange_from","","Returns an iterator through keys starting with start_key (>=), start_key is included",8,{"inputs":[{"name":"database"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"keyrange_to","","Returns an iterator through keys less than end_key, end_key is not included",8,{"inputs":[{"name":"database"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"keyrange_from_to","","Returns an iterator through keys `start_key <= x < end_key`. This is, start_key is\nincluded in the iteration, while end_key is kept excluded.",8,{"inputs":[{"name":"database"},{"name":"k"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"keyrange","","Returns an iterator for values between start_key and end_key (included).\nCurrently it works only for unique keys (i.e. it will skip\nmultiple items when DB created with ffi::MDB_DUPSORT).\nIterator is valid while cursor is valid",8,{"inputs":[{"name":"database"},{"name":"k"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"item_iter","","Returns an iterator for all items (i.e. values with same key)",8,{"inputs":[{"name":"database"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"clone","","",9,{"inputs":[{"name":"envbuilder"}],"output":{"name":"envbuilder"}}],[11,"new","","",9,{"inputs":[{"name":"envbuilder"}],"output":{"name":"envbuilder"}}],[11,"flags","","Sets environment flags",9,{"inputs":[{"name":"envbuilder"},{"name":"envcreateflags"}],"output":{"name":"envbuilder"}}],[11,"max_readers","","Sets max concurrent readers operating on environment",9,{"inputs":[{"name":"envbuilder"},{"name":"usize"}],"output":{"name":"envbuilder"}}],[11,"max_dbs","","Set max number of databases",9,{"inputs":[{"name":"envbuilder"},{"name":"usize"}],"output":{"name":"envbuilder"}}],[11,"map_size","","Sets max environment size, i.e. size in memory/disk of\nall data",9,{"inputs":[{"name":"envbuilder"},{"name":"u64"}],"output":{"name":"envbuilder"}}],[11,"autocreate_dir","","Sets whetever `lmdb-rs` should try to autocreate dir with default\npermissions on opening (default is true)",9,{"inputs":[{"name":"envbuilder"},{"name":"bool"}],"output":{"name":"envbuilder"}}],[11,"open","","Opens environment in specified path",9,{"inputs":[{"name":"envbuilder"},{"name":"path"},{"name":"u32"}],"output":{"name":"mdbresult"}}],[11,"new","","",10,{"inputs":[{"name":"environment"}],"output":{"name":"envbuilder"}}],[11,"reader_check","","Check for stale entries in the reader lock table.",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"stat","","Retrieve environment statistics",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"info","","",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"sync","","Sync environment to disk",10,{"inputs":[{"name":"environment"},{"name":"bool"}],"output":{"name":"mdbresult"}}],[11,"set_flags","","This one sets only flags which are available for change even\nafter opening, see also [get_flags](#method.get_flags) and [get_all_flags](#method.get_all_flags)",10,{"inputs":[{"name":"environment"},{"name":"envflags"},{"name":"bool"}],"output":{"name":"mdbresult"}}],[11,"get_flags","","Get flags of environment, which could be changed after it was opened\nuse [get_all_flags](#method.get_all_flags) if you need also creation time flags",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"get_all_flags","","Get all flags of environment, including which were specified on creation\nSee also [get_flags](#method.get_flags) if you're interested only in modifiable flags",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"get_maxreaders","","",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"get_maxkeysize","","",10,{"inputs":[{"name":"environment"}],"output":{"name":"c_int"}}],[11,"copy_to_fd","","Creates a backup copy in specified file descriptor",10,{"inputs":[{"name":"environment"},{"name":"mdb_filehandle_t"}],"output":{"name":"mdbresult"}}],[11,"get_fd","","Gets file descriptor of this environment",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"copy_to_path","","Creates a backup copy in specified path",10,{"inputs":[{"name":"environment"},{"name":"path"}],"output":{"name":"mdbresult"}}],[11,"new_transaction","","Creates a new read-write transaction",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"get_reader","","Creates a readonly transaction",10,{"inputs":[{"name":"environment"}],"output":{"name":"mdbresult"}}],[11,"get_db","","Opens existing DB",10,{"inputs":[{"name":"environment"},{"name":"str"},{"name":"dbflags"}],"output":{"name":"mdbresult"}}],[11,"create_db","","Opens or creates a DB",10,{"inputs":[{"name":"environment"},{"name":"str"},{"name":"dbflags"}],"output":{"name":"mdbresult"}}],[11,"get_default_db","","Opens default DB with specified flags",10,{"inputs":[{"name":"environment"},{"name":"dbflags"}],"output":{"name":"mdbresult"}}],[11,"clone","","",10,{"inputs":[{"name":"environment"}],"output":{"name":"environment"}}],[11,"clone","","",11,{"inputs":[{"name":"dbhandle"}],"output":{"name":"dbhandle"}}],[11,"new_child","","",12,{"inputs":[{"name":"transaction"}],"output":{"name":"mdbresult"}}],[11,"new_ro_child","","",12,{"inputs":[{"name":"transaction"}],"output":{"name":"mdbresult"}}],[11,"commit","","Commits transaction, moves it out",12,{"inputs":[{"name":"transaction"}],"output":{"name":"mdbresult"}}],[11,"abort","","Aborts transaction, moves it out",12,{"inputs":[{"name":"transaction"}],"output":null}],[11,"bind","","",12,{"inputs":[{"name":"transaction"},{"name":"dbhandle"}],"output":{"name":"database"}}],[11,"new_ro_child","","",13,{"inputs":[{"name":"readonlytransaction"}],"output":{"name":"mdbresult"}}],[11,"abort","","Aborts transaction. But readonly transaction could be\nreused later by calling `renew`",13,{"inputs":[{"name":"readonlytransaction"}],"output":null}],[11,"reset","","Resets read only transaction, handle is kept. Must be followed\nby call to `renew`",13,{"inputs":[{"name":"readonlytransaction"}],"output":null}],[11,"renew","","Acquires a new reader lock after transaction\n`abort` or `reset`",13,{"inputs":[{"name":"readonlytransaction"}],"output":{"name":"mdbresult"}}],[11,"bind","","",13,{"inputs":[{"name":"readonlytransaction"},{"name":"dbhandle"}],"output":{"name":"database"}}],[11,"to_first","","Moves cursor to first entry",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_last","","Moves cursor to last entry",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_key","","Moves cursor to first entry for key if it exists",14,{"inputs":[{"name":"cursor"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"to_gte_key","","Moves cursor to first entry for key greater than\nor equal to ke",14,{"inputs":[{"name":"cursor"},{"name":"k"}],"output":{"name":"mdbresult"}}],[11,"to_item","","Moves cursor to specific item (for example, if cursor\nalready points to a correct key and you need to delete\na specific item through cursor)",14,{"inputs":[{"name":"cursor"},{"name":"k"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"to_next_key","","Moves cursor to next key, i.e. skip items\nwith duplicate keys",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_next_item","","Moves cursor to next item with the same key as current",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_prev_key","","Moves cursor to prev entry, i.e. skips items\nwith duplicate keys",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_prev_item","","Moves cursor to prev item with the same key as current",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_first_item","","Moves cursor to first item with the same key as current",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"to_last_item","","Moves cursor to last item with the same key as current",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"get","","Retrieves current key/value as tuple",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"get_value","","Retrieves current value",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"get_key","","Retrieves current key",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"set","","",14,{"inputs":[{"name":"cursor"},{"name":"k"},{"name":"v"},{"name":"c_uint"}],"output":{"name":"mdbresult"}}],[11,"replace","","Overwrites value for current item\nNote: overwrites max cur_value.len() bytes",14,{"inputs":[{"name":"cursor"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"add_item","","Adds a new item when created with allowed duplicates",14,{"inputs":[{"name":"cursor"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"del","","Deletes current key",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"del_item","","Deletes only current item",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"del_all","","Deletes all items with same key as current",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"item_count","","Returns count of items with the same key as current",14,{"inputs":[{"name":"cursor"}],"output":{"name":"mdbresult"}}],[11,"get_item","","",14,{"inputs":[{"name":"cursor"},{"name":"k"}],"output":{"name":"cursoritemaccessor"}}],[11,"drop","","",14,{"inputs":[{"name":"cursor"}],"output":null}],[11,"get","","",15,{"inputs":[{"name":"cursoritemaccessor"}],"output":{"name":"mdbresult"}}],[11,"add","","",15,{"inputs":[{"name":"cursoritemaccessor"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"del","","",15,{"inputs":[{"name":"cursoritemaccessor"},{"name":"v"}],"output":{"name":"mdbresult"}}],[11,"del_all","","",15,{"inputs":[{"name":"cursoritemaccessor"}],"output":{"name":"mdbresult"}}],[11,"get_key","","",16,{"inputs":[{"name":"cursorvalue"}],"output":{"name":"t"}}],[11,"get_value","","",16,{"inputs":[{"name":"cursorvalue"}],"output":{"name":"t"}}],[11,"get","","",16,null],[11,"next","","",17,{"inputs":[{"name":"cursoriterator"}],"output":{"name":"option"}}],[11,"size_hint","","",17,null],[11,"new","","",18,{"inputs":[{"name":"cursorkeyrangeiter"},{"name":"k"},{"name":"k"},{"name":"bool"}],"output":{"name":"cursorkeyrangeiter"}}],[11,"new","","",19,{"inputs":[{"name":"cursorfromkeyiter"},{"name":"k"}],"output":{"name":"cursorfromkeyiter"}}],[11,"new","","",20,{"inputs":[{"name":"cursortokeyiter"},{"name":"k"}],"output":{"name":"cursortokeyiter"}}],[11,"new","","",21,{"inputs":[{"name":"cursoritemiter"},{"name":"k"}],"output":{"name":"cursoritemiter"}}],[11,"clone","","",22,{"inputs":[{"name":"mdbvalue"}],"output":{"name":"mdbvalue"}}],[11,"new","","",22,null],[11,"new_from_sized","","",22,{"inputs":[{"name":"mdbvalue"},{"name":"t"}],"output":{"name":"mdbvalue"}}],[11,"get_ref","","",22,null],[11,"get_size","","",22,{"inputs":[{"name":"mdbvalue"}],"output":{"name":"usize"}}],[0,"traits","lmdb_rs","Conversion of data structures to and from MDB_val",null,null],[8,"ToMdbValue","lmdb_rs::traits","`ToMdbValue` is supposed to convert a value to a memory\nslice which `lmdb` uses to prevent multiple copying data\nmultiple times. May be unsafe.",null,null],[10,"to_mdb_value","","",23,{"inputs":[{"name":"tomdbvalue"}],"output":{"name":"mdbvalue"}}],[8,"FromMdbValue","","`FromMdbValue` is supposed to reconstruct a value from\nmemory slice. It allows to use zero copy where it is\nrequired.",null,null],[10,"from_mdb_value","","",24,{"inputs":[{"name":"frommdbvalue"},{"name":"mdbvalue"}],"output":{"name":"self"}}],[11,"to_mdb_value","collections::vec","",25,{"inputs":[{"name":"vec"}],"output":{"name":"mdbvalue"}}],[11,"to_mdb_value","collections::string","",26,{"inputs":[{"name":"string"}],"output":{"name":"mdbvalue"}}],[11,"to_mdb_value","ffi","",0,{"inputs":[{"name":"mdb_val"}],"output":{"name":"mdbvalue"}}],[11,"to_mdb_value","lmdb_rs::core","",22,{"inputs":[{"name":"mdbvalue"}],"output":{"name":"mdbvalue"}}],[11,"from_mdb_value","collections::string","",26,{"inputs":[{"name":"string"},{"name":"mdbvalue"}],"output":{"name":"string"}}],[11,"from_mdb_value","collections::vec","",25,{"inputs":[{"name":"vec"},{"name":"mdbvalue"}],"output":{"name":"vec"}}]],"paths":[[3,"MDB_val"],[3,"MDB_stat"],[4,"MDB_cursor_op"],[3,"MDB_envinfo"],[4,"MdbError"],[3,"EnvFlags"],[3,"EnvCreateFlags"],[3,"DbFlags"],[3,"Database"],[3,"EnvBuilder"],[3,"Environment"],[3,"DbHandle"],[3,"Transaction"],[3,"ReadonlyTransaction"],[3,"Cursor"],[3,"CursorItemAccessor"],[3,"CursorValue"],[3,"CursorIterator"],[3,"CursorKeyRangeIter"],[3,"CursorFromKeyIter"],[3,"CursorToKeyIter"],[3,"CursorItemIter"],[3,"MdbValue"],[8,"ToMdbValue"],[8,"FromMdbValue"],[3,"Vec"],[3,"String"]]};
initSearch(searchIndex);
