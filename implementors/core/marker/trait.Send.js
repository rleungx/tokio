(function() {var implementors = {};
implementors["tokio"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/struct.Spawn.html\" title=\"struct tokio::executor::Spawn\">Spawn</a>",synthetic:true,types:["tokio::executor::Spawn"]},{text:"impl&lt;P&nbsp;=&nbsp;<a class=\"struct\" href=\"tokio_executor/park/struct.ParkThread.html\" title=\"struct tokio_executor::park::ParkThread\">ParkThread</a>&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.CurrentThread.html\" title=\"struct tokio::executor::current_thread::CurrentThread\">CurrentThread</a>&lt;P&gt;",synthetic:true,types:["tokio::executor::current_thread::CurrentThread"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.TaskExecutor.html\" title=\"struct tokio::executor::current_thread::TaskExecutor\">TaskExecutor</a>",synthetic:true,types:["tokio::executor::current_thread::TaskExecutor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.Turn.html\" title=\"struct tokio::executor::current_thread::Turn\">Turn</a>",synthetic:true,types:["tokio::executor::current_thread::Turn"]},{text:"impl&lt;'a, P&gt; !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.Entered.html\" title=\"struct tokio::executor::current_thread::Entered\">Entered</a>&lt;'a, P&gt;",synthetic:true,types:["tokio::executor::current_thread::Entered"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.RunError.html\" title=\"struct tokio::executor::current_thread::RunError\">RunError</a>",synthetic:true,types:["tokio::executor::current_thread::RunError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.RunTimeoutError.html\" title=\"struct tokio::executor::current_thread::RunTimeoutError\">RunTimeoutError</a>",synthetic:true,types:["tokio::executor::current_thread::RunTimeoutError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.TurnError.html\" title=\"struct tokio::executor::current_thread::TurnError\">TurnError</a>",synthetic:true,types:["tokio::executor::current_thread::TurnError"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/executor/current_thread/struct.BlockError.html\" title=\"struct tokio::executor::current_thread::BlockError\">BlockError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio::executor::current_thread::BlockError"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/runtime/struct.Builder.html\" title=\"struct tokio::runtime::Builder\">Builder</a>",synthetic:true,types:["tokio::runtime::builder::Builder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/runtime/struct.Shutdown.html\" title=\"struct tokio::runtime::Shutdown\">Shutdown</a>",synthetic:true,types:["tokio::runtime::shutdown::Shutdown"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/runtime/struct.TaskExecutor.html\" title=\"struct tokio::runtime::TaskExecutor\">TaskExecutor</a>",synthetic:true,types:["tokio::runtime::task_executor::TaskExecutor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/runtime/struct.Runtime.html\" title=\"struct tokio::runtime::Runtime\">Runtime</a>",synthetic:true,types:["tokio::runtime::Runtime"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio/runtime/current_thread/struct.Runtime.html\" title=\"struct tokio::runtime::current_thread::Runtime\">Runtime</a>",synthetic:true,types:["tokio::runtime::current_thread::runtime::Runtime"]},];
implementors["tokio_executor"] = [{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/struct.Enter.html\" title=\"struct tokio_executor::Enter\">Enter</a>",synthetic:true,types:["tokio_executor::enter::Enter"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/struct.EnterError.html\" title=\"struct tokio_executor::EnterError\">EnterError</a>",synthetic:true,types:["tokio_executor::enter::EnterError"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/struct.DefaultExecutor.html\" title=\"struct tokio_executor::DefaultExecutor\">DefaultExecutor</a>",synthetic:true,types:["tokio_executor::global::DefaultExecutor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/struct.SpawnError.html\" title=\"struct tokio_executor::SpawnError\">SpawnError</a>",synthetic:true,types:["tokio_executor::SpawnError"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/park/struct.ParkThread.html\" title=\"struct tokio_executor::park::ParkThread\">ParkThread</a>",synthetic:true,types:["tokio_executor::park::ParkThread"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/park/struct.ParkError.html\" title=\"struct tokio_executor::park::ParkError\">ParkError</a>",synthetic:true,types:["tokio_executor::park::ParkError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_executor/park/struct.UnparkThread.html\" title=\"struct tokio_executor::park::UnparkThread\">UnparkThread</a>",synthetic:true,types:["tokio_executor::park::UnparkThread"]},];
implementors["tokio_fs"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_fs/struct.Stdin.html\" title=\"struct tokio_fs::Stdin\">Stdin</a>",synthetic:true,types:["tokio_fs::stdin::Stdin"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_fs/struct.Stdout.html\" title=\"struct tokio_fs::Stdout\">Stdout</a>",synthetic:true,types:["tokio_fs::stdout::Stdout"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_fs/struct.Stderr.html\" title=\"struct tokio_fs::Stderr\">Stderr</a>",synthetic:true,types:["tokio_fs::stderr::Stderr"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.CreateFuture.html\" title=\"struct tokio_fs::file::CreateFuture\">CreateFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_fs::file::create::CreateFuture"]},{text:"impl&lt;P&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.OpenFuture.html\" title=\"struct tokio_fs::file::OpenFuture\">OpenFuture</a>&lt;P&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;P: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_fs::file::open::OpenFuture"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_fs/file/struct.File.html\" title=\"struct tokio_fs::file::File\">File</a>",synthetic:true,types:["tokio_fs::file::File"]},];
implementors["tokio_io"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.AllowStdIo.html\" title=\"struct tokio_io::io::AllowStdIo\">AllowStdIo</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::allow_std::AllowStdIo"]},{text:"impl&lt;R, W&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Copy.html\" title=\"struct tokio_io::io::Copy\">Copy</a>&lt;R, W&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;W: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::copy::Copy"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Flush.html\" title=\"struct tokio_io::io::Flush\">Flush</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::flush::Flush"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Lines.html\" title=\"struct tokio_io::io::Lines\">Lines</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::lines::Lines"]},{text:"impl&lt;R, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Read.html\" title=\"struct tokio_io::io::Read\">Read</a>&lt;R, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;R: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::read::Read"]},{text:"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadExact.html\" title=\"struct tokio_io::io::ReadExact\">ReadExact</a>&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::read_exact::ReadExact"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadToEnd.html\" title=\"struct tokio_io::io::ReadToEnd\">ReadToEnd</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::read_to_end::ReadToEnd"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadUntil.html\" title=\"struct tokio_io::io::ReadUntil\">ReadUntil</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::read_until::ReadUntil"]},{text:"impl&lt;A&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Shutdown.html\" title=\"struct tokio_io::io::Shutdown\">Shutdown</a>&lt;A&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::shutdown::Shutdown"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.ReadHalf.html\" title=\"struct tokio_io::io::ReadHalf\">ReadHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::split::ReadHalf"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.WriteHalf.html\" title=\"struct tokio_io::io::WriteHalf\">WriteHalf</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::split::WriteHalf"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.Window.html\" title=\"struct tokio_io::io::Window\">Window</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::window::Window"]},{text:"impl&lt;A, T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/io/struct.WriteAll.html\" title=\"struct tokio_io::io::WriteAll\">WriteAll</a>&lt;A, T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;A: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::io::write_all::WriteAll"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.BytesCodec.html\" title=\"struct tokio_io::codec::BytesCodec\">BytesCodec</a>",synthetic:true,types:["tokio_io::codec::bytes_codec::BytesCodec"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.LinesCodec.html\" title=\"struct tokio_io::codec::LinesCodec\">LinesCodec</a>",synthetic:true,types:["tokio_io::codec::lines_codec::LinesCodec"]},{text:"impl&lt;T, U&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.Framed.html\" title=\"struct tokio_io::codec::Framed\">Framed</a>&lt;T, U&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;U: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::framed::Framed"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedParts.html\" title=\"struct tokio_io::codec::FramedParts\">FramedParts</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::framed::FramedParts"]},{text:"impl&lt;T, D&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedRead.html\" title=\"struct tokio_io::codec::FramedRead\">FramedRead</a>&lt;T, D&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;D: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::framed_read::FramedRead"]},{text:"impl&lt;T, E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/struct.FramedWrite.html\" title=\"struct tokio_io::codec::FramedWrite\">FramedWrite</a>&lt;T, E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::framed_write::FramedWrite"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.Builder.html\" title=\"struct tokio_io::codec::length_delimited::Builder\">Builder</a>",synthetic:true,types:["tokio_io::length_delimited::Builder"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.Framed.html\" title=\"struct tokio_io::codec::length_delimited::Framed\">Framed</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"https://docs.rs/bytes/0.4.7/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt;::<a class=\"type\" href=\"https://docs.rs/bytes/0.4.7/bytes/buf/into_buf/trait.IntoBuf.html#associatedtype.Buf\" title=\"type bytes::buf::into_buf::IntoBuf::Buf\">Buf</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::length_delimited::Framed"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedRead.html\" title=\"struct tokio_io::codec::length_delimited::FramedRead\">FramedRead</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::length_delimited::FramedRead"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FrameTooBig.html\" title=\"struct tokio_io::codec::length_delimited::FrameTooBig\">FrameTooBig</a>",synthetic:true,types:["tokio_io::length_delimited::FrameTooBig"]},{text:"impl&lt;T, B&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_io/codec/length_delimited/struct.FramedWrite.html\" title=\"struct tokio_io::codec::length_delimited::FramedWrite\">FramedWrite</a>&lt;T, B&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;&lt;B as <a class=\"trait\" href=\"https://docs.rs/bytes/0.4.7/bytes/buf/into_buf/trait.IntoBuf.html\" title=\"trait bytes::buf::into_buf::IntoBuf\">IntoBuf</a>&gt;::<a class=\"type\" href=\"https://docs.rs/bytes/0.4.7/bytes/buf/into_buf/trait.IntoBuf.html#associatedtype.Buf\" title=\"type bytes::buf::into_buf::IntoBuf::Buf\">Buf</a>: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_io::length_delimited::FramedWrite"]},];
implementors["tokio_reactor"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Background.html\" title=\"struct tokio_reactor::Background\">Background</a>",synthetic:true,types:["tokio_reactor::background::Background"]},{text:"impl&lt;E&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.PollEvented.html\" title=\"struct tokio_reactor::PollEvented\">PollEvented</a>&lt;E&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;E: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_reactor::poll_evented::PollEvented"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Reactor.html\" title=\"struct tokio_reactor::Reactor\">Reactor</a>",synthetic:true,types:["tokio_reactor::Reactor"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Handle.html\" title=\"struct tokio_reactor::Handle\">Handle</a>",synthetic:true,types:["tokio_reactor::Handle"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Turn.html\" title=\"struct tokio_reactor::Turn\">Turn</a>",synthetic:true,types:["tokio_reactor::Turn"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.SetFallbackError.html\" title=\"struct tokio_reactor::SetFallbackError\">SetFallbackError</a>",synthetic:true,types:["tokio_reactor::SetFallbackError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_reactor/struct.Registration.html\" title=\"struct tokio_reactor::Registration\">Registration</a>",synthetic:false,types:["tokio_reactor::registration::Registration"]},];
implementors["tokio_tcp"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_tcp/struct.Incoming.html\" title=\"struct tokio_tcp::Incoming\">Incoming</a>",synthetic:true,types:["tokio_tcp::incoming::Incoming"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_tcp/struct.TcpListener.html\" title=\"struct tokio_tcp::TcpListener\">TcpListener</a>",synthetic:true,types:["tokio_tcp::listener::TcpListener"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_tcp/struct.TcpStream.html\" title=\"struct tokio_tcp::TcpStream\">TcpStream</a>",synthetic:true,types:["tokio_tcp::stream::TcpStream"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_tcp/struct.ConnectFuture.html\" title=\"struct tokio_tcp::ConnectFuture\">ConnectFuture</a>",synthetic:true,types:["tokio_tcp::stream::ConnectFuture"]},];
implementors["tokio_threadpool"] = [{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.BlockingError.html\" title=\"struct tokio_threadpool::BlockingError\">BlockingError</a>",synthetic:true,types:["tokio_threadpool::blocking::BlockingError"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.Builder.html\" title=\"struct tokio_threadpool::Builder\">Builder</a>",synthetic:true,types:["tokio_threadpool::builder::Builder"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.Sender.html\" title=\"struct tokio_threadpool::Sender\">Sender</a>",synthetic:true,types:["tokio_threadpool::sender::Sender"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.Shutdown.html\" title=\"struct tokio_threadpool::Shutdown\">Shutdown</a>",synthetic:true,types:["tokio_threadpool::shutdown::Shutdown"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.ThreadPool.html\" title=\"struct tokio_threadpool::ThreadPool\">ThreadPool</a>",synthetic:true,types:["tokio_threadpool::thread_pool::ThreadPool"]},{text:"impl !<a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/struct.Worker.html\" title=\"struct tokio_threadpool::Worker\">Worker</a>",synthetic:true,types:["tokio_threadpool::worker::Worker"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/park/struct.DefaultPark.html\" title=\"struct tokio_threadpool::park::DefaultPark\">DefaultPark</a>",synthetic:true,types:["tokio_threadpool::park::default_park::DefaultPark"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/park/struct.DefaultUnpark.html\" title=\"struct tokio_threadpool::park::DefaultUnpark\">DefaultUnpark</a>",synthetic:true,types:["tokio_threadpool::park::default_park::DefaultUnpark"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_threadpool/park/struct.ParkError.html\" title=\"struct tokio_threadpool::park::ParkError\">ParkError</a>",synthetic:true,types:["tokio_threadpool::park::default_park::ParkError"]},];
implementors["tokio_timer"] = [{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/struct.Deadline.html\" title=\"struct tokio_timer::Deadline\">Deadline</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_timer::deadline::Deadline"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/struct.DeadlineError.html\" title=\"struct tokio_timer::DeadlineError\">DeadlineError</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_timer::deadline::DeadlineError"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/struct.Delay.html\" title=\"struct tokio_timer::Delay\">Delay</a>",synthetic:true,types:["tokio_timer::delay::Delay"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/struct.Error.html\" title=\"struct tokio_timer::Error\">Error</a>",synthetic:true,types:["tokio_timer::error::Error"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/struct.Interval.html\" title=\"struct tokio_timer::Interval\">Interval</a>",synthetic:true,types:["tokio_timer::interval::Interval"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/timer/struct.Handle.html\" title=\"struct tokio_timer::timer::Handle\">Handle</a>",synthetic:true,types:["tokio_timer::timer::handle::Handle"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/timer/struct.SystemNow.html\" title=\"struct tokio_timer::timer::SystemNow\">SystemNow</a>",synthetic:true,types:["tokio_timer::timer::now::SystemNow"]},{text:"impl&lt;T, N&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/timer/struct.Timer.html\" title=\"struct tokio_timer::timer::Timer\">Timer</a>&lt;T, N&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;N: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_timer::timer::Timer"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_timer/timer/struct.Turn.html\" title=\"struct tokio_timer::timer::Turn\">Turn</a>",synthetic:true,types:["tokio_timer::timer::Turn"]},];
implementors["tokio_udp"] = [{text:"impl&lt;C&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpFramed.html\" title=\"struct tokio_udp::UdpFramed\">UdpFramed</a>&lt;C&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;C: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_udp::frame::UdpFramed"]},{text:"impl <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_udp/struct.UdpSocket.html\" title=\"struct tokio_udp::UdpSocket\">UdpSocket</a>",synthetic:true,types:["tokio_udp::socket::UdpSocket"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_udp/struct.SendDgram.html\" title=\"struct tokio_udp::SendDgram\">SendDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_udp::send_dgram::SendDgram"]},{text:"impl&lt;T&gt; <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a> for <a class=\"struct\" href=\"tokio_udp/struct.RecvDgram.html\" title=\"struct tokio_udp::RecvDgram\">RecvDgram</a>&lt;T&gt; <span class=\"where fmt-newline\">where<br>&nbsp;&nbsp;&nbsp;&nbsp;T: <a class=\"trait\" href=\"https://doc.rust-lang.org/nightly/core/marker/trait.Send.html\" title=\"trait core::marker::Send\">Send</a>,&nbsp;</span>",synthetic:true,types:["tokio_udp::recv_dgram::RecvDgram"]},];

            if (window.register_implementors) {
                window.register_implementors(implementors);
            } else {
                window.pending_implementors = implementors;
            }
        
})()
